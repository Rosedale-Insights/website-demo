import type React from 'react';
import {
	AbsoluteFill,
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import type { CursorKeyframe } from '../config/scenes';

type Props = {
	keyframes: CursorKeyframe[];
};

export const AnimatedCursor: React.FC<Props> = ({ keyframes }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	if (keyframes.length === 0) return null;

	// Build frame/x/y arrays for interpolation
	const frames = keyframes.map((k) => k.frame);
	const xs = keyframes.map((k) => k.x);
	const ys = keyframes.map((k) => k.y);

	const easing = Easing.bezier(0.22, 0.61, 0.36, 1);

	const x = interpolate(frame, frames, xs, {
		easing,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const y = interpolate(frame, frames, ys, {
		easing,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Find active click ripples
	const clickFrames = keyframes.filter((k) => k.click).map((k) => k.frame);

	return (
		<AbsoluteFill style={{ pointerEvents: 'none' }}>
			{/* Click ripples */}
			{clickFrames.map((clickFrame) => {
				const elapsed = frame - clickFrame;
				if (elapsed < 0 || elapsed > 20) return null;

				const rippleScale = spring({
					fps,
					frame: elapsed,
					config: { damping: 15, stiffness: 200 },
				});

				const rippleOpacity = interpolate(elapsed, [0, 20], [0.4, 0], {
					extrapolateRight: 'clamp',
				});

				const clickX = interpolate(clickFrame, frames, xs, {
					easing,
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				});
				const clickY = interpolate(clickFrame, frames, ys, {
					easing,
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				});

				return (
					<div
						key={clickFrame}
						style={{
							position: 'absolute',
							left: clickX,
							top: clickY,
							width: 40,
							height: 40,
							borderRadius: '50%',
							border: '2px solid rgba(15, 15, 15, 0.35)',
							transform: `translate(-50%, -50%) scale(${rippleScale * 1.5})`,
							opacity: rippleOpacity,
						}}
					/>
				);
			})}

			{/* Cursor dot */}
			<div
				style={{
					position: 'absolute',
					left: x,
					top: y,
					width: 20,
					height: 20,
					borderRadius: '50%',
					backgroundColor: 'rgba(15, 15, 15, 0.9)',
					border: '2px solid rgba(255, 255, 255, 0.95)',
					boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</AbsoluteFill>
	);
};
