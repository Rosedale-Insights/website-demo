#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_DIR"

# Cleanup function to kill the server on exit
cleanup() {
  if [ -n "${SERVER_PID:-}" ]; then
    echo "==> Stopping production server (PID $SERVER_PID)..."
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

echo "==> Killing any process on port 3000..."
npx kill-port 3000 2>/dev/null || true

echo "==> Building production bundle..."
pnpm build

echo "==> Starting production server..."
pnpm start &
SERVER_PID=$!

echo "==> Waiting for server at http://localhost:3000..."
npx wait-on http://localhost:3000 --timeout 30000

echo "==> Running Playwright demo recording..."
npx playwright test --project=demo-recording

echo "==> Locating recorded video..."
VIDEO_FILE=$(find test-results -name "*.webm" -type f | head -1)

if [ -z "$VIDEO_FILE" ]; then
  echo "ERROR: No .webm video found in test-results/"
  exit 1
fi

echo "==> Found: $VIDEO_FILE"
OUTPUT="demo-recording.mp4"

# Use ffmpeg-static bundled binary
FFMPEG=$(node -e "console.log(require('ffmpeg-static'))" 2>/dev/null || echo "")

if [ -n "$FFMPEG" ] && [ -f "$FFMPEG" ]; then
  echo "==> Converting to MP4 with ffmpeg-static..."
  "$FFMPEG" -y -i "$VIDEO_FILE" \
    -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
    -movflags +faststart \
    "$OUTPUT"
  echo "==> Done! Output: $OUTPUT"
elif command -v ffmpeg &>/dev/null; then
  echo "==> Converting to MP4 with system ffmpeg..."
  ffmpeg -y -i "$VIDEO_FILE" \
    -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
    -movflags +faststart \
    "$OUTPUT"
  echo "==> Done! Output: $OUTPUT"
else
  echo "==> No ffmpeg found — copying raw .webm"
  cp "$VIDEO_FILE" "demo-recording.webm"
  echo "==> Done! Output: demo-recording.webm"
fi
