#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"

echo "=== FORGE Demo Video Pipeline ==="

# Cleanup function to kill the server on exit
cleanup() {
  if [ -n "${SERVER_PID:-}" ]; then
    echo "==> Stopping production server (PID $SERVER_PID)..."
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

# ── Step 0: Install Remotion dependencies ──
echo "==> Step 0: Installing video project dependencies..."
(cd video && pnpm install --frozen-lockfile 2>/dev/null || cd video && pnpm install)

# ── Step 1: Build FORGE app ──
echo "==> Step 1: Killing any process on port 3000..."
npx kill-port 3000 2>/dev/null || true

echo "==> Step 1: Building production bundle..."
pnpm build

# ── Step 2: Start production server ──
echo "==> Step 2: Starting production server..."
pnpm start &
SERVER_PID=$!

echo "==> Waiting for server at http://localhost:3000..."
npx wait-on http://localhost:3000 --timeout 30000

# ── Step 3: Record per-scene clips with Playwright ──
echo "==> Step 3: Recording clips with Playwright..."
npx playwright test tests/demo-scenes.spec.ts

# ── Step 4: Convert .webm clips to .mp4 ──
echo "==> Step 4: Converting clips to MP4..."
mkdir -p video/public/clips

FFMPEG=$(node -e "console.log(require('ffmpeg-static'))" 2>/dev/null || echo "")
if [ -z "$FFMPEG" ] || [ ! -f "$FFMPEG" ]; then
  if command -v ffmpeg &>/dev/null; then
    FFMPEG="ffmpeg"
  else
    echo "ERROR: No ffmpeg found. Install ffmpeg-static or system ffmpeg."
    exit 1
  fi
fi

CLIPS=("clip-1-home-shopfloor" "clip-2-quoting" "clip-3-delivery" "clip-4-knowledge")
for clip in "${CLIPS[@]}"; do
  WEBM=$(find test-results -name "video.webm" -path "*${clip}*" 2>/dev/null | head -1)
  if [ -z "$WEBM" ]; then
    echo "ERROR: No recording found for ${clip}"
    exit 1
  fi
  echo "    Converting ${clip}..."
  "$FFMPEG" -y -i "$WEBM" \
    -c:v libx264 -preset ultrafast -crf 1 -pix_fmt yuv420p \
    -movflags +faststart \
    "video/public/clips/${clip}.mp4"
done

echo "==> All clips converted."

# ── Step 5: Render final video with Remotion ──
echo "==> Step 5: Rendering final video with Remotion..."
cd video
npx remotion render ForgeDemo --output=../demo.mp4 --codec=h264 --crf=12
cd ..

echo "=== Done: demo.mp4 ==="
