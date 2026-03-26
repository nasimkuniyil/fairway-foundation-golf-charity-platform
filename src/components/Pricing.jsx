import { Link } from "react-router-dom";

const tiers = [
  {
    name: 'Birdie Member',
    price: 49,
    description: 'Perfect for the occasional golfer wanting to make a steady impact.',
    features: [
      '1 Sponsored youth lesson per month',
      'Exclusive Foundation merchandise',
      'Quarterly newsletter updates',
      '10% off at partner pro-shops'
    ],
    cta: 'Become a Birdie',
    mostPopular: false,
  },
  {
    name: 'Eagle Member',
    price: 149,
    description: 'Our most popular tier. Significant impact with premium golfing perks.',
    features: [
      'Full equipment set for 1 youth per year',
      '1 Free round per month at partner courses',
      'VIP invites to Foundation tournaments',
      'Premium Foundation apparel kit',
      '20% off at partner pro-shops'
    ],
    cta: 'Become an Eagle',
    mostPopular: true,
  },
  {
    name: 'Albatross Member',
    price: 399,
    description: 'For corporate sponsors and deeply committed golf philanthropists.',
    features: [
      'Fund a full 1-year scholarship for a youth',
      'Foursome at our Annual Charity Classic',
      'Unlimited rounds at select partner courses',
      'Featured on our Sponsor Wall of Fame',
      'Concierge tee-time booking service'
    ],
    cta: 'Become an Albatross',
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange-dark font-bold tracking-wider uppercase text-sm mb-3">Memberships</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Choose Your Impact Level</h3>
          <p className="text-sm md:text-lg text-slate-600">
            100% of the profits directly support our youth programs. Select the monthly subscription tier that best fits your giving goals and golfing lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative rounded-3xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:shadow-2xl ${
                tier.mostPopular 
                  ? 'bg-brand-orange-dark text-white shadow-xl ring-2 ring-brand-500 shadow-brand-900/20' 
                  : 'bg-slate-50 text-slate-900 border border-brand-orange'
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 inset-x-0 flex justify-center -mt-4">
                  <span className="bg-white text-brand-orange-dark border text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className={`text-xl md:text-2xl font-bold mb-2 ${tier.mostPopular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h4>
                <p className={`text-sm h-10 ${tier.mostPopular ? 'text-brand-200' : 'text-slate-500'}`}>{tier.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline text-4xl md:text-5xl font-extrabold">
                ${tier.price}
                <span className={`text-xl font-medium ml-2 ${tier.mostPopular ? 'text-white' : 'text-slate-500'}`}>/mo</span>
              </div>
              
              <Link 
                to="#"
                className={`w-fit mx-auto md:w-full py-3 md:py-4 px-4 md:px-6 rounded-full text-center font-bold transition-all duration-300 hover:scale-95 ${
                  tier.mostPopular
                    ? 'bg-white text-brand-orange-dark'
                    : 'bg-brand-orange-dark text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
