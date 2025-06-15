
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AmericanAkita = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="liquid-glass backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="text-2xl">🐾</div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                SHOLO
              </span>
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
                src="https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="American Akita"
                className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              American <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Akita</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              The American Akita is a dignified, courageous, and profoundly loyal breed. Originally from Japan, these large, powerful dogs are known for their devotion to family and their natural guardian instincts.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon!</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We're carefully establishing our American Akita breeding program with health-tested, champion-quality breeding stock. 
                Our first American Akita litter is planned for 2025.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Dignified
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Courageous
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Loyal
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Guardian
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button className="btn-primary px-8 py-3">
                  Join Our Waitlist
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="btn-secondary px-8 py-3">
                  View Available Breeds
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link to="/" className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-2xl">🐾</div>
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

export default AmericanAkita;
