# Ash3 - Couple's Bucket List Application

## Overview

Ash3 is a romantic, pastel-themed web application designed for couples to track and manage their shared bucket list. The app provides an adorable, mobile-first interface where partners can add dreams, mark them as completed, and celebrate achievements together. The application is built as a single-page application (SPA) with all data persisted in browser localStorage, requiring no backend authentication or user management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query (React Query)** for data fetching and state management
- **Framer Motion** for smooth animations and transitions throughout the UI

**UI Component System:**
- **shadcn/ui** components built on Radix UI primitives
- **TailwindCSS** for utility-first styling with custom design tokens
- **Poppins font** for clean, romantic typography
- Custom color palette centered around rose pink (#FF80AB) with pastel variants

**Design Philosophy:**
- Mobile-first responsive design with generous border radius (20-32px) for soft, friendly aesthetics
- Confetti animations on bucket list item completion using canvas-confetti
- Heart icons and romantic visual elements throughout
- Dark mode support with theme toggle functionality
- Smooth transitions and playful animations for all interactions

**Page Structure:**
- Home: Landing page with animated couple illustration
- Dashboard (Bucket List): Main interface for managing active bucket list items
- Completed: Gallery view of accomplished dreams
- Activity: Timeline of all bucket list changes (additions, completions, deletions)
- Analytics: Progress tracking with statistics and visual indicators
- Settings: Data management and preferences

### Data Management

**Client-Side Storage:**
- All data persisted in browser localStorage (no backend database)
- Custom storage abstraction layer (`client/src/lib/localStorage.ts`) provides CRUD operations
- Two primary data structures:
  - `BucketListItem`: Stores bucket list entries with metadata (id, text, description, priority, targetDate, completion status, timestamps)
  - `ActivityLog`: Records all user actions for activity feed

**Data Features:**
- Priority levels (low, medium, high) with visual color coding
- Optional target dates for bucket list items
- Completion timestamps for tracking achievements
- Activity logging for all create, complete, and delete operations

### Backend Architecture

**Server Setup (Minimal):**
- Express.js server configured for production static file serving
- Development mode uses Vite middleware for HMR
- No authentication or session management required
- Placeholder routes structure exists but unused (app designed for localStorage only)

**Database Configuration:**
- Drizzle ORM configured with PostgreSQL support via `@neondatabase/serverless`
- Schema defined in `shared/schema.ts` with user table (currently unused)
- Database setup exists for potential future backend features but not actively used

**Rationale:** The application was initially scaffolded with backend capabilities but intentionally operates as a pure frontend app. This allows for future enhancement to multi-device sync while keeping current implementation simple for couples sharing a single device.

### State Management

- React Query for server state (unused in current localStorage-only implementation)
- React hooks (useState, useEffect) for local component state
- Custom storage service acts as single source of truth
- No global state management library needed due to localStorage architecture

### Build & Deployment

**Development:**
- `npm run dev` starts Vite dev server with Express backend
- Hot module replacement for instant feedback
- TypeScript checking with `npm run check`

**Production:**
- `npm run build` compiles both client (Vite) and server (esbuild)
- Client assets bundled to `dist/public`
- Server entry point at `dist/index.js`
- `npm start` serves production build

**Configuration Files:**
- `vite.config.ts`: Client build configuration with path aliases
- `tsconfig.json`: TypeScript compiler options with module resolution
- `tailwind.config.ts`: Custom design tokens and theme configuration
- `postcss.config.js`: TailwindCSS processing

## External Dependencies

### UI Framework & Components
- **@radix-ui/react-***: Unstyled, accessible component primitives (dialog, checkbox, dropdown, etc.)
- **shadcn/ui**: Pre-built component library wrapping Radix UI with Tailwind styling
- **framer-motion**: Animation library for smooth transitions and gesture interactions
- **lucide-react**: Icon library providing heart, sparkle, and UI icons

### Styling & Design
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for components
- **clsx** & **tailwind-merge**: Utility for conditional className merging

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **zod**: Schema validation (with drizzle-zod for database schema validation)

### Data & State Management
- **@tanstack/react-query**: Server state management (configured but minimal usage)
- **drizzle-orm**: TypeScript ORM for PostgreSQL (configured for future use)
- **@neondatabase/serverless**: Serverless Postgres driver

### Animations & Effects
- **canvas-confetti**: Celebration confetti effect on bucket list completion

### Development Tools
- **vite**: Fast build tool with HMR
- **typescript**: Type safety
- **@replit/vite-plugin-***: Replit-specific development enhancements (error overlay, dev banner, cartographer)

### Routing
- **wouter**: Lightweight client-side router (< 2KB alternative to React Router)

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store (configured but unused in localStorage mode)

### Utilities
- **date-fns**: Date formatting and manipulation for timestamps
- **nanoid**: Unique ID generation for development

### Backend (Minimal)
- **express**: Web server framework
- **node:http**: HTTP server creation

**Note:** While database and backend dependencies are installed and configured, the current application intentionally operates entirely in the browser using localStorage. This architecture decision prioritizes simplicity for couples using a shared device while maintaining the option to add cloud sync features in the future.