import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const OurDogsSection = () => {
  const breeds = [
    {
      name: 'American Akita',
      description: 'Dignified, Courageous, Profoundly Loyal',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/american-akita',
    },
    {
      name: 'South African Boerboel', 
      description: 'Confident, Intelligent, Calm',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/south-african-boerboel',
    },
    {
      name: 'Miniature Schnauzer',
      description: 'Friendly, Intelligent, Obedient',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/miniature-schnauzer',
    },
    {
      name: 'Kerry Blue Terrier',
      description: 'Alert, Determined, Adaptable',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
      path: '/breeds/kerry-blue-terrier',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Meet Our Distinguished{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Breeds</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Each breed we raise is chosen for its unique qualities and cherished for its distinct personality. 
          We are dedicated to preserving the integrity and promoting the best characteristics of these wonderful companions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {breeds.map((breed, index) => (
          <Link key={breed.name} to={breed.path}>
            <Card className="liquid-glass overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 dark:hover:border-blue-400">
              <div className="relative overflow-hidden">
                <img 
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {breed.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{breed.description}</p>
                
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="liquid-glass p-12 text-center bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-950/20 dark:to-gray-900/20">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Find Your Perfect Companion?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Each of our dogs comes with comprehensive health guarantees, detailed medical records, 
          and our commitment to lifelong support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurDogsSection;