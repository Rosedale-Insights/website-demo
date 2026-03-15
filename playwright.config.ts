import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	timeout: 60_000,
	expect: { timeout: 10_000 },
	fullyParallel: false,
	retries: 0,
	workers: 1,
	reporter: 'list',
	use: {
		baseURL: 'http://localhost:3000',
		viewport: { width: 1920, height: 1080 },
		video: {
			mode: 'on',
			size: { width: 1920, height: 1080 },
		},
		launchOptions: {
			slowMo: 50,
		},
		actionTimeout: 10_000,
	},
	projects: [
		{
			name: 'demo-recording',
			use: { browserName: 'chromium' },
		},
	],
});
