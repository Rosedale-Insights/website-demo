# Agent Configuration & Markdown Review

You are maintaining the Rosedale Template, a Claude Code-optimized Next.js starter repository.
Your job is to ensure all Claude Code configuration, markdown documentation, and agent
instructions are **accurate, consistent, and follow current best practices**.

## Context

This template includes extensive Claude Code configuration:
- `CLAUDE.md` — loaded every session, provides project context
- `AGENTS.md` — compressed stack docs for AI coding agents
- `README.md` — user-facing setup guide and documentation
- `.claude/settings.json` — shared permissions and hooks
- `.claude/.mcp.json` — MCP server configuration
- `.claude/rules/*.md` — path-scoped rules with YAML frontmatter
- `.claude/skills/*/SKILL.md` — slash command skills
- `.claude/hooks/biome-format.sh` — PostToolUse hook

## Tasks

### 1. Review CLAUDE.md

Verify that `CLAUDE.md` accurately reflects the current state of the project:
- **Tech stack**: Matches actual dependencies in `package.json`
- **Commands**: All scripts listed match what's in `package.json` `scripts`
- **Directory structure**: Every listed directory actually exists
- **Code style rules**: Match the actual patterns used in source files
- **File naming conventions**: Match reality
- **IMPORTANT section**: All do-nots are still relevant

### 2. Review AGENTS.md

Verify that `AGENTS.md`:
- Covers all stack components used in the template
- Has accurate code examples that would actually compile
- Does not contain deprecated API patterns
- Is concise — compressed reference format, not a tutorial
- Has correct import paths matching the actual `package.json` dependencies
- Function signatures match the installed library versions

### 3. Review README.md

Verify that `README.md`:
- Lists the correct tech stack matching `package.json`
- Has accurate getting-started instructions that would actually work
- Lists all current scripts from `package.json`
- Documents the correct directory structure (verify each path exists)
- Lists all Claude Code features (skills, rules, MCP servers)
- Has correct environment variable documentation matching `.env.example`
- Slash command table matches actual skills in `.claude/skills/`

### 4. Review .claude/settings.json

Verify that permissions are appropriate:
- `allow` list covers all commands a developer would commonly need
- `deny` list prevents dangerous operations and enforces pnpm
- `ask` list covers operations that need confirmation
- The PostToolUse hook path and configuration are correct
- No commonly needed permissions are missing

### 5. Review .claude/.mcp.json

Search the web for the latest versions of these MCP server packages:
- `@modelcontextprotocol/server-github`
- `@upstash/context7-mcp`
- Neon MCP server

Verify:
- Package names are correct and current
- Argument patterns are correct
- Environment variable references use `${VAR}` syntax
- No new useful MCP servers should be added for this stack

### 6. Review .claude/rules/*.md

For each rule file (`nextjs.md`, `database.md`, `ai-sdk.md`):
- YAML frontmatter `paths` patterns match directories that actually exist
- Rules are accurate for the current installed library versions
- No deprecated patterns are being recommended
- Rules are concise and actionable (not verbose explanations)

### 7. Review .claude/skills/*/SKILL.md

For each skill (`new-feature`, `db-migrate`, `deploy`, `pr`, `review`):
- Workflow steps are still valid for current tooling
- Commands reference correct script names from `package.json`
- Skills use current API patterns and conventions
- YAML frontmatter is well-formed and has correct fields

### 8. Review .claude/hooks/biome-format.sh

Verify the hook:
- Handles all file extensions that Biome can format
- Uses the correct Biome command for the current version
- Has proper error handling (exits cleanly on non-matching files)
- Is executable (`chmod +x`)

### 9. Cross-Reference Consistency

This is the most important task. Ensure consistency **across all files**:
- Version numbers and framework names match across CLAUDE.md, AGENTS.md, README.md
- Directory structure listed in README.md matches CLAUDE.md matches actual filesystem
- Script names in README.md match CLAUDE.md match `package.json`
- Code patterns described in rules match what AGENTS.md documents
- Skill workflows reference scripts that actually exist
- MCP server names in README.md match `.claude/.mcp.json`

## Rules

- Search the web for latest Claude Code documentation and best practices
- Search for latest MCP server package versions
- Preserve the overall structure and tone of each file
- Do NOT modify `.env` or `.env.example` files
- Do NOT modify source code files in `app/` or `lib/` (that's Job 2's responsibility)
- Use `pnpm` exclusively — never `npm` or `yarn`
- Run `pnpm check:fix` after making any changes to code files
- When in doubt about a change, **leave the existing content as-is**
- Every change should have a clear rationale — do not make changes for the sake of change
