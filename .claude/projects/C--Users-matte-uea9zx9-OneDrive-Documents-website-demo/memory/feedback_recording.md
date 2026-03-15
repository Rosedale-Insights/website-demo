---
name: demo-recording-workflow
description: Never run the demo recording script unless explicitly told to. Keep demo pacing fast.
type: feedback
---

NEVER run `bash scripts/record-demo.sh` or the recording unless the user explicitly says "run", "record", or similar.

**Why:** The build+record cycle takes 2+ minutes and the user doesn't want to wait through failed iterations.

**How to apply:** Make all code changes first, confirm with user, only run when they say so.
