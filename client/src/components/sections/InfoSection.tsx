
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const InfoSection = () => {
  const [openItems, setOpenItems] = useState<string[]>(['philosophy']);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const infoItems = [
    {
      id: 'philosophy',
      title: 'Our Breeding Philosophy',
      icon: '📜',
      content: `At Prestige Pups, our breeding philosophy is centered on three core pillars: health, temperament, and adherence to breed standards. We believe that responsible breeding goes beyond simply producing puppies; it's about preserving and improving the qualities that make each breed unique and cherished.

We invest heavily in genetic health testing for all our parent dogs, screening for conditions specific to their breed. This allows us to make informed breeding decisions and significantly reduce the risk of hereditary diseases in our puppies.`
    },
    {
      id: 'health',
      title: 'Health & Genetic Screening',
      icon: '⚕️',
      content: `The health of our dogs and puppies is our utmost priority. All dogs in our breeding program undergo a comprehensive panel of genetic tests recommended for their specific breed by organizations such as the Orthopedic Foundation for Animals (OFA) and breed-specific clubs.

We are transparent with our health testing results and are happy to provide documentation to prospective puppy owners. Our puppies come with a written health guarantee covering congenital defects.`
    },
    {
      id: 'adoption',
      title: 'The Adoption Process',
      icon: '🐾',
      content: `Our adoption process ensures that our puppies are placed in loving, responsible, and permanent homes:

1. Initial Inquiry - Contact us about a specific breed
2. Application - Complete our detailed puppy application
3. Conversation - Phone call to discuss your needs
4. Approval & Waitlist - Get approved and potentially waitlisted
5. Puppy Selection - Choose your puppy when ready
6. Bringing Home - Take your new family member home (8-10 weeks)

All payments are securely processed via Facebook following approval.`
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: '❓',
      content: `**Do you ship puppies?**
We generally prefer pickup in person, but may consider professional pet transport services in special circumstances.

**What's included with a puppy?**
Initial vaccinations, deworming, vet health check, health guarantee, AKC papers, starter food supply, and comfort blanket.

**Can we visit your facility?**
For health and safety, we limit visits. Approved families can meet the parents during pickup.

**How are payments processed?**
All deposits and payments are handled securely through Facebook with clear instructions provided.`
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Information{' '}
          <span className="gradient-text">Hub</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Everything you need to know about our breeding practices, health commitments, and adoption process.
        </p>
      </div>

      <div className="space-y-6">
        {infoItems.map((item, index) => (
          <Collapsible
            key={item.id}
            open={openItems.includes(item.id)}
            onOpenChange={() => toggleItem(item.id)}
          >
            <Card className="apple-card overflow-hidden">
              <CollapsibleTrigger className="w-full p-8 text-left hover:bg-slate-50 transition-all duration-200 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className={`text-blue-600 transform transition-transform duration-200 ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="px-8 pb-8">
                <div className="pt-4 border-t border-slate-200">
                  <div className="prose prose-slate max-w-none">
                    {item.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-600 leading-relaxed mb-4 last:mb-0">
                        {paragraph.split('\n').map((line, lIndex) => (
                          <span key={lIndex}>
                            {line.startsWith('**') ? (
                              <strong className="text-slate-900">{line.replace(/\*\*/g, '')}</strong>
                            ) : line.match(/^\d+\./) ? (
                              <span className="font-semibold text-slate-800">{line}</span>
                            ) : (
                              line
                            )}
                            {lIndex < paragraph.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ))}
                  </div>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
          <div className="text-slate-600">Years of Excellence</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-slate-600">Happy Families</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
          <div className="text-slate-600">Health Guaranteed</div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
