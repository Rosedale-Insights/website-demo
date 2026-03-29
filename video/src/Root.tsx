import type React from 'react';
import { Composition, staticFile } from 'remotion';
import { scenes } from './config/scenes';
import { ForgeDemo } from './ForgeDemo';

/**
 * Default durations (in frames at 30fps) for each clip.
 * These are fallback estimates — the pipeline script can override via props.
 */
const DEFAULT_CLIP_DURATIONS = [
	14 * 30, // Clip 1: ~14s
	28 * 30, // Clip 2: ~30s (extra scroll + pauses)
	16 * 30, // Clip 3: ~16s (chart animation visible)
	22 * 30, // Clip 4: ~22s
];

const FADE_FRAMES = 8;
const FADE_TO_BLACK_FRAMES = 30;

function calculateTotalDuration(clipDurations: number[]): number {
	let total = 0;
	for (let i = 0; i < scenes.length; i++) {
		const duration = clipDurations[i] ?? 300;
		const effective = duration - scenes[i].preRollFrames;
		total += effective;
	}
	// Subtract overlap from cross-fades (each transition overlaps by its duration)
	total -= FADE_FRAMES * (scenes.length - 1);
	// Add fade-to-black
	total += FADE_TO_BLACK_FRAMES;
	return total;
}

export const RemotionRoot: React.FC = () => {
	const totalDuration = calculateTotalDuration(DEFAULT_CLIP_DURATIONS);

	return (
		<Composition
			id="ForgeDemo"
			component={ForgeDemo}
			durationInFrames={totalDuration}
			fps={30}
			width={1920}
			height={1080}
			defaultProps={{
				clipDurations: DEFAULT_CLIP_DURATIONS,
			}}
		/>
	);
};
