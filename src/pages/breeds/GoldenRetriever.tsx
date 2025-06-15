
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GoldenRetriever = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80',
    'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
    'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80'
  ];

  const characteristics = [
    { trait: 'Intelligence', rating: 5 },
    { trait: 'Energy Level', rating: 4 },
    { trait: 'Good with Kids', rating: 5 },
    { trait: 'Trainability', rating: 5 },
    { trait: 'Grooming Needs', rating: 4 },
    { trait: 'Health', rating: 4 }
  ];

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
            <Link 
              to="/" 
              className="btn-secondary px-6 py-2 text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-8">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Golden
                  <span className="block gradient-text">Retriever</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, 
                  lustrous coat of gold that gives the breed its name. They are characterized by a gentle 
                  and intelligent expression, an eagerness to please, and a joyful demeanor.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Joyful
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Intelligent
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Devoted
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Family-Friendly
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Quick Facts</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Size:</span>
                    <span className="font-semibold">Medium-Large</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Weight:</span>
                    <span className="font-semibold">55-75 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Lifespan:</span>
                    <span className="font-semibold">10-12 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Group:</span>
                    <span className="font-semibold">Sporting</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="apple-card p-4 transform hover:scale-105 transition-all duration-300">
                <img 
                  src={galleryImages[0]}
                  alt="Beautiful Golden Retriever"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/10 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
              Breed <span className="gradient-text">Characteristics</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characteristics.map((char) => (
                <Card key={char.trait} className="apple-card p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{char.trait}</h3>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < char.rating ? 'bg-amber-400' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{char.rating}/5</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <Card className="apple-card p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Temperament & Personality</h3>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-slate-900">Intelligent & Trainable:</strong> Golden Retrievers are 
                      eager to please and quick to learn, excelling in obedience training and various canine activities. 
                      Their high intelligence makes them excellent candidates for therapy work and service dog training.
                    </p>
                    <p>
                      <strong className="text-slate-900">Friendly & Trustworthy:</strong> Known for their gentle nature 
                      and patience with children, Golden Retrievers make excellent family pets. They are naturally 
                      sociable with other animals and welcome strangers with enthusiasm.
                    </p>
                    <p>
                      <strong className="text-slate-900">Active & Playful:</strong> These dogs enjoy outdoor activities 
                      like fetch, swimming, and long walks. They require regular exercise to maintain their physical 
                      and mental well-being.
                    </p>
                    <p>
                      <strong className="text-slate-900">Devoted Companions:</strong> Golden Retrievers form strong 
                      bonds with their families and thrive on human interaction. They are happiest when included in 
                      family activities and given meaningful work to do.
                    </p>
                  </div>
                </Card>

                <Card className="apple-card p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Golden Retriever Program</h3>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Our Golden Retrievers are bred from champion lines with a strong emphasis on health, temperament, 
                      and conformation to the breed standard. All parent dogs are screened for hip and elbow dysplasia, 
                      heart conditions, and eye diseases including PRA and cataracts.
                    </p>
                    <p>
                      We strive to produce Goldens that not only embody the classic, loving Golden personality but also 
                      possess the structural soundness necessary for an active, healthy life. Our breeding program focuses 
                      on producing dogs with excellent temperaments suitable for families, therapy work, and various 
                      canine sports.
                    </p>
                    <p>
                      Each puppy is raised in our home environment with early neurological stimulation, socialization 
                      with children and other animals, and exposure to various sounds and experiences to ensure they 
                      are well-adjusted and confident.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="apple-card p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Available Puppies</h3>
                  <div className="space-y-4">
                    <p className="text-slate-700">
                      We currently have <strong className="text-amber-600">3</strong> Golden Retriever puppies 
                      available from our recent litter (DOB: March 15, 2024).
                    </p>
                    <p className="text-slate-600 text-sm">
                      Our puppies come with health guarantees, first vaccinations, deworming, and are well-socialized.
                    </p>
                    <p className="text-slate-500 text-xs">
                      Payments processed securely via Facebook after application approval.
                    </p>
                    <Link to="/#contact">
                      <Button className="btn-primary w-full">
                        Inquire About Puppies
                      </Button>
                    </Link>
                  </div>
                </Card>

                <Card className="apple-card p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Upcoming Litters</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-slate-900">Summer 2024</p>
                      <p className="text-slate-600">Champion Aurora × Champion Zeus</p>
                      <p className="text-slate-500">Expected: July 2024</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-semibold text-slate-900">Fall 2024</p>
                      <p className="text-slate-600">Champion Belle × Champion Storm</p>
                      <p className="text-slate-500">Expected: September 2024</p>
                    </div>
                  </div>
                </Card>

                <Card className="apple-card p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Health Testing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Hip Dysplasia</span>
                      <span className="text-green-600 font-semibold">✓ Clear</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Elbow Dysplasia</span>
                      <span className="text-green-600 font-semibold">✓ Clear</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Heart Clearance</span>
                      <span className="text-green-600 font-semibold">✓ Normal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Eye Clearance</span>
                      <span className="text-green-600 font-semibold">✓ Clear</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">PRA1 & PRA2</span>
                      <span className="text-green-600 font-semibold">✓ Clear</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
              Photo <span className="gradient-text">Gallery</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="apple-card overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src={image}
                    alt={`Golden Retriever ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Card className="apple-card p-12 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Ready to Welcome a Golden Retriever?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Our Golden Retriever puppies are raised with love and dedication. Each comes with health guarantees, 
                extensive socialization, and our commitment to lifelong support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button className="btn-primary px-8 py-3">
                    Start Application Process
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="btn-secondary px-8 py-3">
                    View All Breeds
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-slate-900 text-white py-12">
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

export default GoldenRetriever;
