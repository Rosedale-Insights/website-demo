  Create a Playwright-based demo recording system for my app. This should produce a
  polished, cinematic product demo video (1920x1080) that I can use for marketing/sales.     

  ## Architecture

  Set up 3 files:

  1. **playwright.config.ts** — Configured for demo recording:
     - 1920x1080 viewport and video resolution
     - Video mode: "on"
     - Chromium browser, project named "demo-recording"
     - 50ms slowMo for natural pacing
     - Whole recording shouldn't take longer than 40 seconds.

  2. **tests/demo-recording.spec.ts** — The scripted demo walkthrough with these
     cinematic helpers:

     - **Fake animated cursor**: A fixed-position 20px dark circle with white border
       and drop shadow, smoothly animated between positions using CSS transitions
       (0.35s cubic-bezier). This replaces the real (hidden) mouse cursor so movements       
       look smooth on video.

     - **Click ripple effect**: On click, shrink the cursor briefly (20px→16px→20px)
       and expand a ring outward from the click point (scale 0→1.5, fading out).
       This gives clear visual feedback that something was clicked.

     - **Full-page zoom** (IMPORTANT — get this right):
       Set `transform-origin` directly to the target element's center point, then
       animate ONLY `scale()`. Do NOT combine `translate()` + `scale()` from a
       fixed origin — that creates two competing motions that look bouncy/jittery.
       Use `ease-in-out` easing with ~0.6s duration. On zoom-out, animate scale
       back to 1 with the same easing.

     - **Helper functions needed**: `injectCursor(page)`, `moveCursorTo(page, x, y)`,        
       `moveCursorToElement(page, locator)`, `clickWithCursor(page, locator)`,
       `zoomIn(page, locator, scale)`, `zoomOut(page)`, `pause(ms)`

     The test script should walk through the app's key features scene by scene:
     - Use `pause()` liberally between actions (400ms-2000ms) for comfortable pacing
     - Use `pressSequentially()` with ~50ms delay for realistic typing
     - Navigate using sidebar/nav links with the fake cursor
     - Hover over cards/elements to show interactivity
     - Fill forms to show functionality
     - End by hiding the cursor for a clean final frame

     Specific Scenes:
     1. Start on insights scroll down to show Due Jobs table.
     2. Click On Knowledge Base. Use mock data to send three messages to the chat. There should be typing but quick tyiping. 
     3. Click on Documents 
     4. Click on Quoting. Scroll down and add a little zoom on forge AI insight. Zoom back out.
     5. Click on Agents. Then Click on Quality Inspector AI. End. 


  3. **scripts/record-demo.sh** — Automation script that:
     - Builds the app first with `npm run build` (IMPORTANT — do NOT use `npm run dev`,      
       dev mode compiles pages on-demand so every first page visit is slow and ruins
       the recording)
     - Starts the production server with `npm run start`
     - Waits for it with `npx wait-on http://localhost:3000`
     - Runs the Playwright test
     - Copies the .webm from test-results/
     - Converts to .mp4 with ffmpeg (H.264, slow preset, CRF 18, yuv420p)

  ## Dependencies

  Add to devDependencies:
  - @playwright/test
  - wait-on

  ## Key techniques & gotchas

  1. **Why a fake cursor**: Playwright's video capture doesn't show the real mouse
     cursor. We inject a DOM element and animate it with CSS transitions so the
     recording shows a visible, smoothly-moving cursor.

  2. **Zoom must be single-property**: Only animate `scale()` via `transform`.
     Set `transform-origin` to the target point (no transition on origin). Never
     combine translate + scale in the same animation — it creates a bounce effect.

  3. **Production build for speed**: `npm run build && npm run start` pre-compiles
     everything. Page navigations become instant instead of waiting 2-5s for
     on-demand compilation.

