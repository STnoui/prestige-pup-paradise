
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SouthAfricanBoerboel = () => {
  const handleNavigateToSection = (sectionId: string) => {
    // Navigate to home page with section
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header onNavigateToSection={handleNavigateToSection} />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-16 text-center rounded-3xl shadow-lg">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="South African Boerboel"
                className="w-full max-w-2xl mx-auto h-96 object-cover rounded-2xl"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              South African <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Boerboel</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
             The South African Boerboel is a confident, intelligent, and calm breed. Originally developed as a farm guardian, they are known for their loyalty, protective nature, and gentle demeanor with family.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us for Availability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We're developing our South African Boerboel program with carefully selected champion lines.
                Contact us on Facebook to discuss our current and upcoming Miniature Schnauzer litters.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Confident
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Intelligent
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Calm
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  Protective
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <a 
                href="https://facebook.com/sholo.breeding" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Contact Us on Facebook
              </a>
            </div>
          </Card>
        </div>
      </main>

      <Footer onNavigateToSection={handleNavigateToSection} />
    </div>
  );
};

export default SouthAfricanBoerboel;
