
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LabradorRetriever = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="glass backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="text-2xl">🐾</div>
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform">
                Prestige Pups
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
          <Card className="apple-card p-16 text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Labrador Retriever"
                className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Labrador <span className="gradient-text">Retriever</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              America's most popular breed! The friendly, outgoing, and active Labrador Retriever has more than enough affection to go around for a family looking for a medium to large dog. Labs are famously friendly and outgoing.
            </p>

            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Coming Soon!</h2>
              <p className="text-blue-700 mb-6">
                We're developing our Labrador Retriever program with carefully selected champion lines. 
                Our first Labrador litter is planned for late 2024.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Friendly
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Outgoing
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Versatile
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Athletic
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

      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <Link to="/" className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-2xl">🐾</div>
            <span className="text-xl font-bold gradient-text">Prestige Pups</span>
          </Link>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Prestige Pups. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LabradorRetriever;
