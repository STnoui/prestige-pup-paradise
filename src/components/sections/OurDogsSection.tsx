
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const OurDogsSection = () => {
  const breeds = [
    {
      name: 'Golden Retriever',
      description: 'Joyful, Intelligent, Devoted',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80',
      path: '/breeds/golden-retriever',
      color: 'from-amber-400 to-orange-500'
    },
    {
      name: 'Labrador Retriever', 
      description: 'Friendly, Outgoing, Versatile',
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/labrador-retriever',
      color: 'from-green-400 to-blue-500'
    },
    {
      name: 'French Bulldog',
      description: 'Playful, Affectionate, Charming',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      path: '/breeds/french-bulldog',
      color: 'from-blue-400 to-purple-500'
    },
    {
      name: 'German Shepherd',
      description: 'Noble, Courageous, Intelligent',
      image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
      path: '/breeds/german-shepherd',
      color: 'from-yellow-400 to-red-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Meet Our Distinguished{' '}
          <span className="gradient-text">Breeds</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Each breed we raise is chosen for its unique qualities and cherished for its distinct personality. 
          We are dedicated to preserving the integrity and promoting the best characteristics of these wonderful companions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {breeds.map((breed, index) => (
          <Link key={breed.name} to={breed.path}>
            <Card className="apple-card overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${breed.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {breed.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{breed.description}</p>
                
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
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
      <div className="apple-card p-12 text-center bg-gradient-to-r from-blue-50 to-purple-50">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">
          Ready to Find Your Perfect Companion?
        </h3>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
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
          <button 
            onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Learn Our Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurDogsSection;
