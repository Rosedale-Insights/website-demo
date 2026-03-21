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
 * Per-scene configuration for cursor overlay, zoom regions, and pre-roll trimming.
 *
 * Cursor keyframes are starting estimates — refine in Remotion Studio.
 * Coordinates are in 1920x1080 space.
 */
export const scenes: SceneConfig[] = [
	{
		id: 'home-shopfloor',
		clip: 'clips/clip-1-home-shopfloor.mp4',
		preRollFrames: 60, // 2s at 30fps
		cursor: [
			{ frame: 0, x: 960, y: 540 },
			{ frame: 60, x: 500, y: 400 },
			{ frame: 120, x: 140, y: 280 },
			{ frame: 130, x: 140, y: 280, click: true },
			{ frame: 210, x: 700, y: 600 },
			{ frame: 260, x: 700, y: 500, click: true },
			{ frame: 310, x: 700, y: 500, click: true },
		],
		zoom: [],
	},
	{
		id: 'quoting',
		clip: 'clips/clip-2-quoting.mp4',
		preRollFrames: 60,
		cursor: [
			{ frame: 0, x: 960, y: 540 },
			{ frame: 40, x: 400, y: 200 },
			{ frame: 50, x: 400, y: 200, click: true },
			{ frame: 90, x: 700, y: 320, click: true },
			{ frame: 150, x: 700, y: 320, click: true },
			{ frame: 180, x: 1600, y: 140, click: true },
			{ frame: 260, x: 960, y: 500, click: true },
			{ frame: 400, x: 600, y: 700 },
			{ frame: 450, x: 600, y: 700, click: true },
		],
		zoom: [
			{
				startFrame: 220,
				endFrame: 260,
				scale: 1.2,
				originX: 960,
				originY: 500,
			},
			{
				startFrame: 420,
				endFrame: 450,
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
		cursor: [
			{ frame: 0, x: 960, y: 540 },
			{ frame: 60, x: 700, y: 500 },
			{ frame: 160, x: 700, y: 650, click: true },
			{ frame: 210, x: 700, y: 650, click: true },
		],
		zoom: [
			{
				startFrame: 30,
				endFrame: 70,
				scale: 1.3,
				originX: 960,
				originY: 520,
			},
			{
				startFrame: 100,
				endFrame: 130,
				scale: 1,
				originX: 960,
				originY: 540,
			},
		],
	},
	{
		id: 'knowledge',
		clip: 'clips/clip-4-knowledge.mp4',
		preRollFrames: 60,
		cursor: [
			{ frame: 0, x: 960, y: 540 },
			{ frame: 30, x: 700, y: 800 },
			{ frame: 40, x: 700, y: 800, click: true },
			{ frame: 200, x: 900, y: 800, click: true },
			{ frame: 300, x: 700, y: 800, click: true },
			{ frame: 460, x: 900, y: 800, click: true },
		],
		zoom: [],
	},
];
