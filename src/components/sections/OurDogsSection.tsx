
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const OurDogsSection = () => {
  const breeds = [
    {
      name: 'American Akita',
      description: 'A majestic and powerful guardian, profoundly loyal and devoted to its family.',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/american-akita',
    },
    {
      name: 'South African Boerboel', 
      description: 'A confident, gentle giant that serves as a calm and loving family protector.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/south-african-boerboel',
    },
    {
      name: 'Miniature Schnauzer',
      description: 'A bright, friendly companion with a charming beard and a lively, fearless personality.',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/miniature-schnauzer',
    },
    {
      name: 'Kerry Blue Terrier',
      description: 'A spirited and elegant terrier with a beautiful blue coat and a deeply affectionate heart.',
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {breeds.map((breed, index) => (
          <Link key={breed.name} to={breed.path}>
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 dark:hover:border-blue-400 rounded-3xl">
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
              
              <div className="p-6 bg-white dark:bg-gray-900">
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
    </div>
  );
};

export default OurDogsSection;
