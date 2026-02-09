# Project Overview

## Current Status: Structure and Core Logic

This project is a React application built with TypeScript, designed for learning French at A1 and A2 levels. It utilizes `react-router-dom` for client-side routing, employing hash-based navigation.

### Structure

The application follows a nested layout structure:
- **`src/main.tsx`**: The entry point, setting up `react-router-dom` and the main `Layout` component.
- **`src/components/Layout.tsx`**: Provides the overarching UI structure, including a global navigation bar (`Navigation.tsx`) and an `<Outlet>` for rendering page-specific content.
- **`src/components/Navigation.tsx`**: Implements the primary navigation, allowing users to switch between major sections like "Evaluation," "A1," and "A2" levels.
- **`src/pages/a1/` and `src/pages/a2/`**: These directories contain the core content and logic for each language level.
    - **`A1Home.tsx` / `A2Home.tsx`**: Act as section-specific layouts. They typically define a two-column structure, incorporating a `SidebarNav` (e.g., `src/components/SidebarNav.tsx`) for navigating within the level (e.g., Language, Listening, Reading) and another `<Outlet>` for rendering the actual lesson content.
    - **`language/`, `listening/`, `reading/` subdirectories**: Contain the components and data related to specific skill areas within each level. For example, `src/pages/a1/language/Language.tsx` is the main component for the A1 language section.

### Routing

The application uses `createHashRouter` from `react-router-dom`. Key routing patterns include:
- A root route that renders the `Layout` component.
- Nested routes within the `Layout` for "evaluation," "a1," and "a2" paths.
- Further nested routes within level-specific layouts (e.g., `A1Home`) to handle navigation to "language," "listening," and "reading" sections, and then to individual lesson parts (e.g., `A1-1`, `A1-2`).

Example routing hierarchy:
- `/` -> `Layout`
  - `/evaluation` -> `EvaluationHome`
  - `/a1` -> `A1Home`
    - `/a1/language` -> `Language` (A1 Language main page)
      - `/a1/language/1` -> `LanguageChapter` (A1 Language Part 1)
    - `/a1/listening` -> `Listening` (A1 Listening main page)
    - `/a1/reading` -> `Reading` (A1 Reading main page)

### Logic and Data Flow

- **Content Storage**: Educational content (presentations, activities, quiz questions) is stored in static TypeScript files within the respective skill directories (e.g., `src/pages/a1/language/languageA11Content.ts`, `src/pages/a1/listening/listeningA1Data.ts`). This content is exported as JavaScript objects/arrays.
- **Data Service Layer**: A service layer, exemplified by `src/pages/a1/a1DataService.ts`, acts as an intermediary. Components do not directly import content files. Instead, they call functions from these data services (e.g., `getPartData`) which then import and process the raw content. This decouples the UI components from the raw data structure.
- **Component Interaction**: Page components (e.g., `A1OverviewPage.tsx`, `LanguageChapter.tsx`) fetch the necessary data from the data service and then render it using presentational components (e.g., `ActivityView.tsx`, `PresentationView.tsx`, `QuizView.tsx` found in `src/pages/a1/language/components/`). This separation of concerns promotes reusability and maintainability.

### Development Environment

- **ESLint Configuration**: ESLint is configured to enforce consistent type imports using the `@typescript-eslint/consistent-type-imports` rule. This ensures that TypeScript types and interfaces are always imported with `import type` to prevent runtime issues. Mixed imports are configured to use inline syntax (e.g., `import { getValue, type TypeName } from '...'`).
- **Linting Script**: A `lint` npm script (`"lint": "eslint src --ext .ts,.tsx"`) has been added to `package.json` for easy execution of the linter across all relevant TypeScript and TSX files.
