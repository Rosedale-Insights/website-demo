export type CursorKeyframe = {
	frame: number;
	x: number;
	y: number;
	click?: boolean;
};

export type ZoomRegion = {
	startFrame: number;
	endFrame: number;
	scale: number;
	originX: number;
	originY: number;
};

export type SceneConfig = {
	id: string;
	clip: string;
	preRollFrames: number;
	cursor: CursorKeyframe[];
	zoom: ZoomRegion[];
};

/**
 * Per-scene configuration for zoom regions and pre-roll trimming.
 * Coordinates are in 1920x1080 space (16:9 aspect ratio).
 */
export const scenes: SceneConfig[] = [
	{
		id: 'home-shopfloor',
		clip: 'clips/clip-1-home-shopfloor.mp4',
		preRollFrames: 60,
		cursor: [],
		zoom: [],
	},
	{
		id: 'quoting',
		clip: 'clips/clip-2-quoting.mp4',
		preRollFrames: 60,
		cursor: [],
		zoom: [
			// Zoom into modal — centered in 1920 wide viewport
			{
				startFrame: 300,
				endFrame: 340,
				scale: 1.15,
				originX: 960,
				originY: 200,
			},
			// Zoom back out before close
			{
				startFrame: 500,
				endFrame: 540,
				scale: 1,
				originX: 960,
				originY: 540,
			},
		],
	},
	{
		id: 'delivery',
		clip: 'clips/clip-3-delivery.mp4',
		preRollFrames: 60,
		cursor: [],
		zoom: [
			// Zoom into Delivery Risk Summary — right side of wider viewport
			{
				startFrame: 60,
				endFrame: 100,
				scale: 1.25,
				originX: 1730,
				originY: 520,
			},
			// Zoom back out before scrolling to POs
			{
				startFrame: 150,
				endFrame: 190,
				scale: 1,
				originX: 1730,
				originY: 540,
			},
		],
	},
	{
		id: 'knowledge',
		clip: 'clips/clip-4-knowledge.mp4',
		preRollFrames: 60,
		cursor: [],
		zoom: [],
	},
];
