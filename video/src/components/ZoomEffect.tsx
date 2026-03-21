import type React from 'react';
import { Easing, interpolate, useCurrentFrame } from 'remotion';
import type { ZoomRegion } from '../config/scenes';

type Props = {
	regions: ZoomRegion[];
	children: React.ReactNode;
};

export const ZoomEffect: React.FC<Props> = ({ regions, children }) => {
	const frame = useCurrentFrame();

	// Calculate cumulative zoom from all regions
	let scale = 1;
	let originX = 960;
	let originY = 540;

	for (const region of regions) {
		if (frame >= region.startFrame && frame <= region.endFrame) {
			scale = interpolate(frame, [region.startFrame, region.endFrame], [scale, region.scale], {
				easing: Easing.bezier(0.25, 0.1, 0.25, 1),
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			});
			originX = region.originX;
			originY = region.originY;
		} else if (frame > region.endFrame) {
			scale = region.scale;
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
