# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FLE A1-A2 is a French language learning platform for evaluating and improving French skills from A1 to A2 level. It's a static React SPA with PWA capabilities, featuring skill evaluations (reading, listening, grammar/vocabulary) with progressive level unlocking.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server (localhost:5173)
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint checks
npm run preview      # Preview production build
npx vitest           # Run tests in watch mode
npx vitest run       # Run tests once (CI mode)
npx vitest run src/path/to/file.test.tsx  # Run single test file
```

**Pre-commit requirement**: Run `npm run build` and `npm run lint` before committing.

## Architecture

### Routing (`src/main.tsx`)
Uses `createBrowserRouter` with basename `/fr-a1-a2/`. All routes are nested under a shared `Layout` component with `ErrorBoundary`:

- `/` → `EvaluationHome` (home page with evaluation hub)
- `/a1` → `A1Home` (level home page)
- `/a1/language` → `LanguageChapter` (language chapter content)
- `/a2` → `A2Home` (level home page)
- `/reading` → `Reading` (reading comprehension evaluation)
- `/listening` → `Listening` (listening comprehension evaluation)
- `/language` → `Language` (grammar & vocabulary evaluation)
- `/language/summary` → `LanguageSummary` (results summary)

### Component Structure

**Layout System** (`src/components/`):
- `Layout.tsx` - Main wrapper with Navigation via `<Outlet />`
- `Navigation.tsx` - Top navigation bar
- `Breadcrumb.tsx` - Page breadcrumb navigation
- `SidebarNav.tsx` - Section sidebar navigation
- `ProgressTracker.tsx` - Learning progress visualization
- `ErrorBoundary.tsx` - Error handling wrapper for routes

**Evaluation System** (`src/components/`):
- `EnhancedEvaluation.tsx` - Core evaluation component handling multiple question types (multiple-choice, true-false, fill-in-blank, drag-drop, short-answer), timer, progress tracking, and result calculation
- `ResultsVisualization.tsx` - Displays evaluation results with charts
- `TextToSpeech.tsx` - Audio playback for questions
- `ContentManagement.tsx` - Content administration

### Data Structure (`src/pages/evaluation/`)

Question data files define skill assessments:
- `languageData.ts` - Grammar/vocabulary questions organized by sub-level (A1-1, A1-2, A1-3, A1-4)
- `readingData.ts` - Reading comprehension questions
- `listeningData.ts` - Listening comprehension questions

Raw question format in data files:
```typescript
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;  // index into options array
}
```

### Progressive Level Unlocking

The grammar evaluation (`Language.tsx`) uses localStorage to track progress:
- `A1-1` always unlocked
- Subsequent levels unlock when previous level scores 7/10+
- Unlock key format: `${level}_unlocked` (e.g., `A1-2_unlocked`)

### Styling

- CSS Modules for component-scoped styles (`.module.css`)
- Global styles in `src/index.css` and `src/styles/`
- Skill pages share common styles via `SkillPage.css`

### PWA Configuration (`vite.config.ts`)

Uses `vite-plugin-pwa` with:
- Auto-update service worker
- Google Fonts caching (1 year)
- Manifest with app icons at 192x192 and 512x512
- Start URL and base path: `/fr-a1-a2/`

### Testing

Vitest with React Testing Library:
- Test files: `*.test.tsx`
- Setup: `src/setupTests.ts` (imports `@testing-library/jest-dom`)
- Config: `vitest.config.ts` with jsdom environment and globals enabled
- Wrap router-dependent components in `BrowserRouter` for tests

## Key Patterns

**Navigation**: Always use React Router's `Link` or `useNavigate()`, never `window.location`

**Question Components**: The `EnhancedEvaluation` component expects questions in this format:
```typescript
{
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in-blank' | 'drag-drop' | 'short-answer';
  question: string;
  instruction?: string;
  transcript?: string;  // for listening exercises
  options?: { id: string; text: string; isCorrect?: boolean }[];
  correctAnswer?: string;
}
```

**Level Data Conversion**: When using `languageData.ts` questions with `EnhancedEvaluation`, map the format using `getEnhancedQuestions()` in `Language.tsx`:
- Convert numeric `id` to string
- Map `options` array to `{ id, text, isCorrect }` objects
- Convert `correctAnswer` index to string

## Language & Content

All UI content is in French. Key terminology:
- "Comprehension Ecrite" = Reading comprehension
- "Comprehension Orale" = Listening comprehension
- "Grammaire & Vocabulaire" = Grammar & Vocabulary
- "Evaluation" = Assessment/Evaluation
