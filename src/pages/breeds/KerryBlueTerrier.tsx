
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const KerryBlueTerrier = () => {
  const availableDogs = [
    {
      id: 1,
      name: "Blue Thunder",
      age: "8 weeks",
      gender: "Male",
      price: "$2,800",
      description: "Champion bloodline with excellent temperament. Health tested parents.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Health Guarantee", "Microchipped", "First Vaccinations", "Champion Bloodline"]
    },
    {
      id: 2,
      name: "Kerry's Pride",
      age: "10 weeks",
      gender: "Female",
      price: "$3,200",
      description: "Exceptional female with show potential. Perfect family companion.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Show Quality", "Health Guarantee", "Microchipped", "Socialized"]
    }
  ];

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
          {/* Breed Header */}
          <div className="liquid-glass p-16 text-center mb-12">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kerry Blue Terrier"
                className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Kerry Blue <span className="gradient-text">Terrier</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The Kerry Blue Terrier is an alert, determined, and adaptable breed. Originally bred in Ireland for hunting and farm work, they make excellent family companions with proper training and socialization.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Alert
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                Determined
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                Adaptable
              </span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                Loyal
              </span>
            </div>
          </div>

          {/* Available Dogs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Puppies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {availableDogs.map((dog) => (
                <Card key={dog.id} className="liquid-glass overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={dog.image}
                      alt={dog.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {dog.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{dog.name}</h3>
                        <p className="text-gray-600">{dog.age} • {dog.gender}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{dog.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {dog.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 btn-primary">
                        Contact About {dog.name}
                      </Button>
                      <Button variant="outline" className="btn-secondary">
                        More Photos
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="liquid-glass p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in a Kerry Blue Terrier?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our available puppies or to join our waiting list for future litters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button className="btn-primary px-8 py-3">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="btn-secondary px-8 py-3">
                  View Other Breeds
                </Button>
              </Link>
            </div>
          </div>
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

export default KerryBlueTerrier;
