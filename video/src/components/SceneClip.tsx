import type React from 'react';
import { AbsoluteFill, OffthreadVideo, staticFile } from 'remotion';
import type { SceneConfig } from '../config/scenes';
import { ZoomEffect } from './ZoomEffect';

type Props = {
	scene: SceneConfig;
};

export const SceneClip: React.FC<Props> = ({ scene }) => {
	return (
		<AbsoluteFill style={{ backgroundColor: 'black' }}>
			<ZoomEffect regions={scene.zoom}>
				<OffthreadVideo
					src={staticFile(scene.clip)}
					startFrom={scene.preRollFrames}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
					}}
				/>
			</ZoomEffect>
		</AbsoluteFill>
	);
};
