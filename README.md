# prestige pup paradise

modern responsive web application built using react typescript and modern web technologies

## overview

full stack web application featuring internationalization support theme switching and responsive design patterns optimized for performance and user experience

## features

- responsive design optimized for all device sizes with mobile first approach using css grid and flexbox layouts
- theme support with light and dark mode smooth transitions implemented via css custom properties and react context
- multi language support with english and bulgarian language options using react context for state management
- smooth animations with enhanced user experience using framer motion animations and css transitions
- modern ui built with radix ui components and tailwind css utility classes for consistent styling
- type safe development environment with typescript strict mode enabled
- component based architecture with reusable ui components and custom hooks
- client side routing with react router dom for single page application navigation
- state management using react context api for global application state

## tech stack

### frontend
- react 18 with concurrent features and hooks
- typescript with strict type checking
- vite for fast development and build tooling
- tailwind css for utility first styling
- radix ui for accessible component primitives
- lucide react for consistent iconography
- framer motion for declarative animations
- react router dom for client side routing

### backend
- express.js web application framework
- node.js runtime environment
- drizzle orm for type safe database operations
- postgresql for relational database storage

### development tools
- vite dev server with hot module replacement
- typescript compiler for type checking
- eslint for code quality and consistency
- prettier for code formatting

## getting started

### prerequisites

- node.js v16 or higher with npm package manager
- postgresql database server running locally or remote connection
- git for version control
- modern web browser with es6 support

### environment setup

create environment variables file
```bash
cp .env.example .env
```

configure database connection and application settings in .env file
```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
NODE_ENV=development
PORT=3000
```

### installation

1. clone the repository and navigate to project directory:
```bash
git clone https://github.com/yourusername/prestige-pup-paradise.git
cd prestige-pup-paradise
```

2. install all project dependencies including dev dependencies:
```bash
npm install
```

3. setup database schema and initial data:
```bash
npm run db:push
npm run db:seed
```

4. start the development server with hot reload:
```bash
npm run dev
```

5. open your browser and navigate to http://localhost:5173 for frontend and http://localhost:3000 for api endpoints

### production deployment

build optimized production bundle
```bash
npm run build
```

start production server
```bash
npm start
```

serve static files with nginx or apache for optimal performance

## available scripts

- npm run dev - start development server with hot module replacement
- npm run build - create optimized production build with tree shaking
- npm run build:dev - create development build for debugging
- npm start - start production server with express.js
- npm run preview - preview production build locally
- npm run check - run typescript type checking without emitting files
- npm run lint - run eslint for code quality checks
- npm run format - format code with prettier
- npm run db:push - push database schema changes to postgresql
- npm run db:pull - pull schema changes from database
- npm run db:generate - generate database migration files
- npm run db:migrate - run pending database migrations
- npm run db:seed - populate database with initial data
- npm run test - run unit tests with jest
- npm run test:watch - run tests in watch mode
- npm run test:coverage - generate test coverage reports

## project structure

```
prestige-pup-paradise/
├── client/                     # frontend react application
│   ├── src/
│   │   ├── components/         # reusable ui components
│   │   │   ├── ui/            # base ui components from radix
│   │   │   ├── sections/      # page section components
│   │   │   └── common/        # shared utility components
│   │   ├── pages/             # application pages and routes
│   │   │   ├── breeds/        # individual breed pages
│   │   │   └── index.tsx      # main landing page
│   │   ├── contexts/          # react contexts for global state
│   │   │   ├── ThemeContext.tsx
│   │   │   └── LanguageContext.tsx
│   │   ├── hooks/             # custom react hooks
│   │   ├── styles/            # custom css and animations
│   │   ├── types/             # typescript type definitions
│   │   ├── utils/             # utility functions and helpers
│   │   └── lib/               # third party library configurations
│   ├── public/                # static assets and meta files
│   │   ├── images/            # breed photos and graphics
│   │   ├── icons/             # application icons
│   │   └── manifest.json      # pwa manifest
│   ├── index.html             # main html template
│   ├── vite.config.ts         # vite configuration
│   └── tailwind.config.js     # tailwind css configuration
├── server/                    # backend express server
│   ├── src/
│   │   ├── routes/            # api route handlers
│   │   ├── middleware/        # express middleware functions
│   │   ├── controllers/       # business logic controllers
│   │   ├── models/            # database models and schemas
│   │   ├── services/          # external service integrations
│   │   └── utils/             # server utility functions
│   ├── drizzle/               # database schema and migrations
│   └── package.json           # server dependencies
├── shared/                    # shared schemas and types
│   ├── types/                 # typescript interfaces
│   └── schemas/               # validation schemas
├── dist/                      # production build output
├── coverage/                  # test coverage reports
├── docs/                      # project documentation
├── .env.example               # environment variables template
├── .gitignore                 # git ignore patterns
├── package.json               # project metadata and scripts
├── tsconfig.json              # typescript configuration
├── eslint.config.js           # eslint rules and settings
└── README.md                  # project documentation
```

## api endpoints

### breed information
- GET /api/breeds - retrieve all available breeds
- GET /api/breeds/:id - get specific breed details
- GET /api/breeds/:id/images - fetch breed image gallery

### contact and inquiries
- POST /api/contact - submit contact form
- POST /api/availability - check puppy availability
- GET /api/breeding-program - get breeding program information

## browser support

- chrome 90+
- firefox 88+
- safari 14+
- edge 90+
- mobile browsers with es6 support

## performance optimizations

- code splitting with dynamic imports
- image lazy loading with intersection observer
- tree shaking for bundle size optimization
- css minification and purging unused styles
- gzip compression for static assets
- service worker for offline functionality
- critical css inlining for faster first paint

## accessibility features

- semantic html markup with proper heading hierarchy
- aria labels and descriptions for screen readers
- keyboard navigation support for all interactive elements
- color contrast ratios meeting wcag 2.1 aa standards
- focus indicators for keyboard users
- reduced motion support for users with vestibular disorders

## contributing

1. fork the repository to your github account
2. create your feature branch git checkout -b feature/amazingfeature
3. install dependencies and setup development environment
4. make changes following existing code style and conventions
5. add tests for new functionality and ensure existing tests pass
6. commit your changes git commit -m 'add some amazingfeature'
7. push to the branch git push origin feature/amazingfeature
8. open a pull request with detailed description of changes
9. wait for code review and address any feedback
10. merge after approval from maintainers

## testing

run unit tests with jest and react testing library
```bash
npm run test
```

run integration tests
```bash
npm run test:integration
```

generate coverage reports
```bash
npm run test:coverage
```

## deployment

### docker deployment
```bash
docker build -t prestige-pup-paradise .
docker run -p 3000:3000 prestige-pup-paradise
```

### vercel deployment
```bash
npm install -g vercel
vercel --prod
```

### netlify deployment
```bash
npm run build
# upload dist folder to netlify
```

## monitoring and analytics

- error tracking with sentry integration
- performance monitoring with web vitals
- user analytics with google analytics 4
- uptime monitoring with automated health checks

## security considerations

- input validation and sanitization
- csrf protection with tokens
- rate limiting for api endpoints
- secure headers with helmet.js
- environment variable protection
- dependency vulnerability scanning

## license

this project is licensed under the mit license - see the license file for details
allows commercial use modification distribution and private use

## contact and support

for questions bugs or feature requests please open an issue on github
for security vulnerabilities please email security@example.com
for general inquiries contact us through the application contact form

## changelog

see changelog.md for detailed version history and release notes

## roadmap

- progressive web app features
- advanced search and filtering
- user authentication system
- admin dashboard for content management
- mobile application development
- integration with external breeding databases