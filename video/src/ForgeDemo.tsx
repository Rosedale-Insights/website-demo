import { linearTiming, TransitionSeries } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import React from 'react';
import { AbsoluteFill } from 'remotion';
import { SceneClip } from './components/SceneClip';
import { scenes } from './config/scenes';

type Props = {
	clipDurations: number[];
};

const FADE_FRAMES = 15; // 0.5s at 30fps
const FADE_TO_BLACK_FRAMES = 30; // 1s

export const ForgeDemo: React.FC<Props> = ({ clipDurations }) => {
	return (
		<TransitionSeries>
			{scenes.map((scene, i) => {
				const duration = clipDurations[i] ?? 300;
				// Subtract pre-roll frames since SceneClip skips them via startFrom
				const effectiveDuration = duration - scene.preRollFrames;

				return (
					<React.Fragment key={scene.id}>
						{i > 0 && (
							<TransitionSeries.Transition
								timing={linearTiming({ durationInFrames: FADE_FRAMES })}
								presentation={fade()}
							/>
						)}
						<TransitionSeries.Sequence durationInFrames={effectiveDuration}>
							<SceneClip scene={scene} />
						</TransitionSeries.Sequence>
					</React.Fragment>
				);
			})}

			{/* Fade to black ending */}
			<TransitionSeries.Transition
				timing={linearTiming({ durationInFrames: FADE_TO_BLACK_FRAMES })}
				presentation={fade()}
			/>
			<TransitionSeries.Sequence durationInFrames={FADE_TO_BLACK_FRAMES}>
				<AbsoluteFill style={{ backgroundColor: 'black' }} />
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
