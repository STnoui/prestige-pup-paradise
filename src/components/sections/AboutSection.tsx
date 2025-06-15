
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'Committed to the highest standards in breeding practices and care'
    },
    {
      icon: '❤️',
      title: 'Compassion',
      description: 'Every dog is treated with love, respect, and individual attention'
    },
    {
      icon: '🔬',
      title: 'Science',
      description: 'Evidence-based breeding with comprehensive health testing'
    },
    {
      icon: '🌟',
      title: 'Legacy',
      description: 'Building lasting relationships with families for generations'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          A Legacy of Love &{' '}
          <span className="gradient-text">Dedication</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          For over two decades, Prestige Pups has been synonymous with exceptional breeding practices, 
          focusing on health, temperament, and adherence to breed standards.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Our Philosophy</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded on a deep love for canine companionship and a commitment to ethical breeding, 
              we believe in providing a nurturing environment where our dogs and puppies thrive. 
              We are not a large-scale kennel; we are a family of passionate breeders who pour 
              our hearts into every litter.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              At the heart of our philosophy is a profound respect for each animal. This includes 
              spacious, clean living areas, premium nutrition, regular veterinary care, and abundant 
              opportunities for socialization and play.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              AKC Certified
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              Health Guaranteed
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
              20+ Years Experience
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="apple-card p-8 transform hover:scale-105 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Happy dogs with their breeder"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full"></div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <Card 
            key={value.title}
            className="apple-card p-8 text-center group hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
            <p className="text-slate-600 leading-relaxed">{value.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
