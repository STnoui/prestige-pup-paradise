# Prestige Pup Paradise 🐕

A modern, responsive web application showcasing premium dog breeds with elegant design and smooth animations.

## Features

- **Premium Dog Breed Showcase**: Detailed pages for American Akita, Kerry Blue Terrier, Miniature Schnauzer, and South African Boerboel
- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Theme Support**: Light and dark mode with smooth transitions
- **Multi-language Support**: English and Bulgarian language options
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Modern UI**: Built with Radix UI components and Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **UI Components**: Radix UI, Lucide React icons
- **Animations**: Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: Drizzle ORM with PostgreSQL
- **State Management**: React Context API
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prestige-pup-paradise.git
cd prestige-pup-paradise
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
prestige-pup-paradise/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── contexts/      # React contexts (Theme, Language)
│   │   ├── styles/        # Custom CSS and animations
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
├── server/                # Backend Express server
├── shared/                # Shared schemas and types
└── dist/                  # Production build output
```

## Dog Breeds Featured

- **American Akita**: Large, powerful spitz breed known for dignity and courage
- **Kerry Blue Terrier**: Irish working terrier with distinctive blue coat
- **Miniature Schnauzer**: Small, robust terrier with distinctive beard and eyebrows
- **South African Boerboel**: Large mastiff breed, confident guardian and family companion

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please open an issue on GitHub.