import type React from 'react';
import { Easing, interpolate, useCurrentFrame } from 'remotion';
import type { ZoomRegion } from '../config/scenes';

type Props = {
	regions: ZoomRegion[];
	children: React.ReactNode;
};

const EASE = Easing.bezier(0.25, 0.1, 0.25, 1);

export const ZoomEffect: React.FC<Props> = ({ regions, children }) => {
	const frame = useCurrentFrame();

	if (regions.length === 0) {
		return <>{children}</>;
	}

	// Build a continuous timeline from all zoom regions.
	// Between regions, hold the last region's scale.
	// Before first region, scale is 1. After last, hold last scale.
	const timelineFrames: number[] = [0];
	const timelineScales: number[] = [1];

	for (const region of regions) {
		// Start of this region — hold previous scale up to this point
		timelineFrames.push(region.startFrame);
		timelineScales.push(timelineScales[timelineScales.length - 1]);
		// End of this region — arrive at target scale
		timelineFrames.push(region.endFrame);
		timelineScales.push(region.scale);
	}

	const scale = interpolate(frame, timelineFrames, timelineScales, {
		easing: EASE,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Use the origin of whichever region we're closest to
	let originX = 960;
	let originY = 540;
	for (const region of regions) {
		if (frame >= region.startFrame) {
			originX = region.originX;
			originY = region.originY;
		}
	}

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				transform: `scale(${scale})`,
				transformOrigin: `${originX}px ${originY}px`,
			}}
		>
			{children}
		</div>
	);
};
