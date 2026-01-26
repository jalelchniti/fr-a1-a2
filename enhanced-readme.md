# FLE A1-A2 Learning Platform - Enhanced Version

## Overview
This is an enhanced version of the FLE A1-A2 Learning Platform, a React-based French language learning application designed to help students progress from A1 (beginner) to A2 (elementary) levels. The platform provides evaluation tools and learning materials organized by themes and competencies.

## Enhancements Made

### 1. Design Token System
- Implemented a comprehensive design token system in `src/styles/tokens.css`
- Organized CSS variables into logical categories (colors, spacing, sizing, typography, etc.)
- Used semantic naming conventions for better maintainability

### 2. Reusable UI Components
- Created a library of reusable UI components in `src/styles/components.css`
- Components include alerts, cards, badges, progress bars, and more
- All components follow the design token system for consistency

### 3. Enhanced Visual Design
- Redesigned the Home page with modern UI elements and improved visual hierarchy
- Updated the Evaluation Home page with enhanced styling
- Improved the A1 and A2 Home pages with consistent design language
- Enhanced the Navigation component with improved styling

### 4. Navigation & User Flow Enhancements
- Added progress tracking indicators with the ProgressTracker component
- Implemented breadcrumb navigation with the Breadcrumb component
- Created a responsive sidebar navigation with the SidebarNav component
- Improved mobile navigation experience with a toggle button
- Enhanced user orientation with clear pathways between sections

### 5. French Cultural Elements
- Preserved and enhanced French cultural elements throughout the UI
- Maintained the French tricolor theme in design elements
- Improved the French flag indicator component

### 6. Responsive Design
- Improved responsive behavior across all screen sizes
- Enhanced touch targets for mobile devices
- Better mobile navigation experience

## Technology Stack
- **Framework**: React 19.2.0
- **Language**: TypeScript ~5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS modules with design tokens
- **Routing**: React Router DOM 7.12.0
- **Icons**: Lucide React

## Project Structure
```
src/
├── assets/           # Static assets and images
├── components/       # Reusable UI components
│   ├── Layout.tsx    # Main layout wrapper
│   ├── Layout.module.css # Enhanced layout styles
│   ├── Navigation.tsx # Responsive navigation bar
│   └── Navigation.css # Enhanced navigation styles
├── pages/            # Route-specific pages
│   ├── Home.tsx      # Enhanced landing page
│   ├── Home.module.css # Enhanced home page styles
│   ├── evaluation/   # Assessment modules
│   │   ├── EvaluationHome.tsx
│   │   ├── EvaluationHome.module.css # Enhanced evaluation styles
│   │   ├── Reading.tsx
│   │   ├── Listening.tsx
│   │   ├── Language.tsx
│   │   └── LanguageSummary.tsx
│   ├── a1/           # A1 level content
│   │   ├── A1Home.tsx
│   │   ├── A1Home.module.css # Enhanced A1 home styles
│   │   └── LevelHome.module.css # Enhanced level styles
│   └── a2/           # A2 level content
│       ├── A2Home.tsx
│       └── A2Home.module.css # Enhanced A2 home styles
├── styles/           # Shared styles and design system
│   ├── tokens.css    # Design token system
│   ├── components.css # Reusable UI components
│   └── component-guidelines.md # Component usage documentation
├── index.css         # Global styles with design tokens
├── main.tsx          # Application entry point
└── setupTests.ts     # Test configuration
```

## Key Features

### 1. Multi-Level Learning Path
- **A1 Level**: Beginner content focusing on basic French skills
- **A2 Level**: Elementary content (currently under development)
- Themed lessons covering daily life situations

### 2. Comprehensive Assessment
- **Reading Comprehension**: Written text understanding
- **Listening Comprehension**: Audio comprehension exercises
- **Grammar & Vocabulary**: Language structure and word knowledge
- Detailed results by competency area

### 3. Enhanced User Experience
- Modern, visually appealing UI with consistent design language
- Responsive navigation with dropdown menus
- Progress tracking with visual indicators
- Breadcrumb navigation for better orientation
- French-themed UI with tricolor flag elements
- Mobile-friendly design with improved touch targets

### 4. Navigation Structure
- Home page with feature highlights
- Evaluation section with diagnostic tests
- A1 learning content organized by themes
- A2 learning content (planned)

### 5. New Components
- **Breadcrumb Component**: Shows current location in the site hierarchy
- **Progress Tracker Component**: Visual indicators for course progress
- **Sidebar Navigation Component**: Alternative navigation for deeper sections
- **Mobile Navigation Toggle**: Easy access to sidebar on smaller screens

### 6. Enhanced Evaluation System
- **Diversified Question Types**: Multiple choice, true/false, fill-in-the-blank, and short answer questions
- **Improved Results Visualization**: Charts and graphs showing performance by category
- **Detailed Feedback**: Comprehensive feedback with correct answers and explanations
- **Adaptive Testing**: Time limits and progress tracking during evaluations
- **Results Visualization Component**: Interactive charts showing performance metrics

### 7. Content Management & Multimedia Integration
- **Content Management System**: Organized learning materials with filtering and search capabilities
- **Multimedia Player**: Audio and video content with interactive controls
- **Content Cards**: Individual content items with metadata and actions
- **Categorized Content**: Organized by type, level, difficulty, and tags
- **Interactive Learning Modules**: Engaging content with multimedia elements
- **Rating System**: User ratings for content quality assessment

## Development Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Internationalization Notes
- Interface is in French (Français Langue Étrangère)
- Content focuses on French language learning
- Cultural elements integrated (French tricolor flag)

## Design System Principles
1. **Consistency**: Maintains consistent design patterns across the application
2. **Accessibility**: Follows WCAG 2.1 AA guidelines
3. **Scalability**: Designed components that can be reused and extended
4. **Performance**: Optimized for fast loading and smooth interactions
5. **French Identity**: Incorporates French cultural elements tastefully

## Component Usage Guidelines
See `src/styles/component-guidelines.md` for detailed documentation on using the reusable UI components.

## Contributing
When adding new components or features:
1. Follow the existing patterns and naming conventions
2. Use the design tokens consistently
3. Ensure accessibility compliance
4. Add documentation to the component guidelines
5. Test across browsers and devices