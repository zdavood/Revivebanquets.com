# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- **API Server** (`artifacts/api-server`) — Express API at `/api`.
- **Canvas / Mockup Sandbox** (`artifacts/mockup-sandbox`) — component preview sandbox.
- **Revive Event Center** (`artifacts/revive-event-center`) — single-page React + Vite marketing site at `/` for Revive Banquet Hall in Merced, CA. Frontend-only (no backend, no API). All photo URLs are centralized in `src/content/images.ts`; the user swaps in real photos by dropping files into `public/revive-photos/` and editing that one file. Tour and inquiry buttons are normal links to hosted VenueOS pages, configured in `src/content/venueos.ts` — no custom forms exist.
