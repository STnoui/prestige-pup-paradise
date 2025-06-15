
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MiniatureSchnauzer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="liquid-glass backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="text-2xl">🐾</div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
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
                alt="Miniature Schnauzer"
                className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Miniature <span className="gradient-text">Schnauzer</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The Miniature Schnauzer is a friendly, intelligent, and obedient breed. These small but sturdy dogs are known for their distinctive beard and eyebrows, alert nature, and excellent family companionship.
            </p>

            <div className="bg-green-50 rounded-2xl p-8 mb-8 border border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-4">Coming Soon!</h2>
              <p className="text-green-700 mb-6">
                We're developing our Miniature Schnauzer program with carefully selected champion lines. 
                Our first Miniature Schnauzer litter is anticipated for late 2025.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Friendly
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Intelligent
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Obedient
                </span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Alert
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
            <span className="text-xl font-bold gradient-text">SHOLO</span>
          </Link>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SHOLO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MiniatureSchnauzer;
