# SHOLO Dog Breeding Website

## Overview

SHOLO is a modern dog breeding website built with a full-stack TypeScript architecture. The application showcases different dog breeds with detailed information and provides a platform for potential customers to learn about and contact the breeder. The site features a clean, modern design with multilingual support (English/Bulgarian) and dark/light theme switching.

## System Architecture

The application follows a monorepo structure with a clear separation between client, server, and shared components:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, Context API for client state

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router for client-side navigation
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system focusing on shadows over borders
- **State Management**: 
  - React Query for server state management
  - Context API for language and theme preferences
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL
- **Storage**: Currently using in-memory storage (MemStorage class) with interface for easy database migration
- **Middleware**: Request logging, JSON parsing, CORS handling
- **Development**: Hot reload with tsx

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Storage Interface**: Abstracted CRUD operations ready for database implementation

### UI/UX Design System
- **Theme**: Clean, minimalist design with blue accent colors
- **Components**: Shadow-based design instead of borders
- **Typography**: Poppins font family
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Subtle fade-in and scale animations

## Data Flow

1. **Client Requests**: React components make requests through React Query
2. **API Routes**: Express server handles requests at `/api/*` endpoints
3. **Storage Layer**: Abstract storage interface allows for easy database switching
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: React Query manages cache and UI updates

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React Router, React Query)
- Express.js for server
- Drizzle ORM for database operations
- Neon Database serverless PostgreSQL driver

### UI Dependencies
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for icons
- shadcn/ui component library

### Development Dependencies
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for server bundling
- tsx for development server hot reload

### Replit-specific Dependencies
- Replit Vite plugins for development experience
- Runtime error overlay for debugging

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Server**: Runs on port 5000 with hot reload
- **Client**: Vite dev server with HMR
- **Database**: In-memory storage for development

### Production Build
- **Build Command**: `npm run build`
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles server to `dist/index.js`
- **Start Command**: `npm run start`

### Replit Configuration
- **Environment**: Node.js 20, Web, PostgreSQL 16 modules
- **Deployment**: Autoscale deployment target
- **Port Mapping**: Internal 5000 → External 80
- **Database**: PostgreSQL 16 ready for activation

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
- June 20, 2025. Completed Lovable to Replit migration with styling improvements:
  * Fixed missing dependencies (react-router-dom, sonner)
  * Resolved Poppins font configuration in Tailwind
  * Enhanced Hero section with larger SHOLO text and extended container
  * Changed button text from "Meet Our Breeds" to "Meet Our Dogs"
  * Removed header border bar in light/dark modes
  * Fixed mobile navigation to stay open when selecting options
  * Updated "Contact for Availability" sections to use pure white/black backgrounds
  * Applied consistent styling across all breed pages
  * Added Playfair Display font for hero section headings
  * Redesigned hero section with modern typography-focused layout and improved readability
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```