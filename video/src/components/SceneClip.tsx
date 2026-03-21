import type React from 'react';
import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from 'remotion';
import type { SceneConfig } from '../config/scenes';
import { AnimatedCursor } from './AnimatedCursor';
import { ZoomEffect } from './ZoomEffect';

type Props = {
	scene: SceneConfig;
};

export const SceneClip: React.FC<Props> = ({ scene }) => {
	return (
		<AbsoluteFill>
			{/* Skip the pre-roll frames so transitions blend with rendered content */}
			<Sequence from={0}>
				<ZoomEffect regions={scene.zoom}>
					<OffthreadVideo
						src={staticFile(scene.clip)}
						startFrom={scene.preRollFrames}
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</ZoomEffect>
			</Sequence>

			{/* Cursor overlay */}
			<AnimatedCursor keyframes={scene.cursor} />
		</AbsoluteFill>
	);
};
