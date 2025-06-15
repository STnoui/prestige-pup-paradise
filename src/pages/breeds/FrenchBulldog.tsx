
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FrenchBulldog = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="liquid-glass backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/4fc6ff94-b7a7-4209-83d2-aa6063da5978.png" 
                alt="SHOLO Logo" 
                className="h-12 w-12 logo-circular group-hover:scale-105 transition-transform duration-200 object-cover"
              />
            </Link>
            <Link to="/" className="btn-secondary px-6 py-2 text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="liquid-glass p-16 text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
                alt="French Bulldog"
                className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              French <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Bulldog</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              The one-of-a-kind French Bulldog, with his large bat ears and even disposition, is one of the world's most popular small-dog breeds, especially among city dwellers. Frenchies are playful, alert, adaptable, and completely irresistible.
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us for Availability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We're carefully establishing our French Bulldog breeding program with health-tested, champion-quality breeding stock. 
                Contact us on Facebook to discuss our current and upcoming French Bulldog litters.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Playful
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Affectionate
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Charming
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Adaptable
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://facebook.com/sholo.breeding" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Contact Us on Facebook
              </a>
              <Link to="/">
                <Button variant="outline" className="btn-secondary px-8 py-3">
                  View Available Breeds
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link to="/" className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/lovable-uploads/4fc6ff94-b7a7-4209-83d2-aa6063da5978.png" 
              alt="SHOLO Logo" 
              className="h-8 w-8 logo-circular object-cover"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">SHOLO</span>
          </Link>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SHOLO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FrenchBulldog;
