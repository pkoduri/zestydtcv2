# Overview

This is a full-stack web application built with React and Express that implements a Go-To-Market (GTM) Framework viewer. The application displays a 7-phase strategic framework for product launches, including phases like Launch Situation Assessment, Differentiated Positioning, Customer Segmentation, and more. Users can navigate through different phases and view a comprehensive timeline roadmap. The app features a modern UI with sidebar navigation, phase-specific content display, and an interactive timeline view.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with CSS variables for theming and shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling of server code
- **Storage**: In-memory storage implementation with interface for future database integration
- **Middleware**: Custom request/response logging and error handling

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Database**: PostgreSQL (configured but not actively used, using in-memory storage currently)
- **Schema**: Zod validation schemas for runtime type checking of GTM framework data
- **Migrations**: Drizzle Kit for database schema management

## Authentication and Authorization
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not implemented)
- **Current State**: No authentication system actively implemented, using basic storage interface

## Design Patterns
- **Component Architecture**: Modular React components with clear separation of concerns
- **Custom Hooks**: useIsMobile for responsive behavior, useToast for notifications
- **Shared Types**: Common TypeScript interfaces and Zod schemas in shared directory
- **Route Structure**: API routes prefixed with /api, static file serving for production

## Key Features
- **Phase Navigation**: Step-by-step progression through GTM framework phases
- **Timeline View**: Comprehensive roadmap visualization from -36 to +24 months
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Keyboard Navigation**: Arrow key support for phase navigation
- **Interactive UI**: Modern card-based layout with icons, badges, and data tables

# External Dependencies

## UI and Styling
- **@radix-ui/***: Complete set of accessible UI primitives for building the component library
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Type-safe variant management for component styling
- **clsx**: Utility for conditional className composition

## Frontend Libraries
- **@tanstack/react-query**: Server state management and data fetching
- **wouter**: Lightweight routing library for React
- **react-hook-form** with **@hookform/resolvers**: Form handling and validation
- **date-fns**: Date manipulation and formatting utilities
- **embla-carousel-react**: Carousel/slider component functionality

## Backend Dependencies
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **zod**: Runtime type validation and schema definition

## Development Tools
- **vite**: Build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment