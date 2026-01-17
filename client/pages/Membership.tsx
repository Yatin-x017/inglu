import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedList from '@/components/AnimatedList';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Membership() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get('role') as 'learner' | 'employer';

  const learnerTiers = [
    {
      name: 'Starter',
      price: '0',
      period: 'Free Forever',
      description: 'Perfect for exploring opportunities',
      features: [
        'Access to job board',
        'Community access',
        'Basic profile',
        '1 project showcase',
        'Monthly newsletter',
        'Community events',
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Professional',
      price: '4.99',
      period: 'per month',
      description: 'Best for serious learners',
      features: [
        'Everything in Starter',
        'Priority job matching',
        'Unlimited projects',
        '1-on-1 mentoring',
        'Advanced analytics',
        'Certificate programs',
        'Priority support',
        'Networking events',
      ],
      cta: 'Subscribe Now',
      popular: true,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Elite',
      price: '9.99',
      period: 'per month',
      description: 'For serious career advancement',
      features: [
        'Everything in Professional',
        'Guaranteed job placement',
        'Personal career coach',
        'Unlimited mentoring',
        'Resume review service',
        'Interview prep',
        'VIP event access',
        'Direct recruiter access',
      ],
      cta: 'Upgrade Now',
      popular: false,
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const employerTiers = [
    {
      name: 'Starter',
      price: '99',
      period: 'per month',
      description: 'Begin hiring talent',
      features: [
        'Up to 3 job postings',
        'Access to talent pool',
        'Basic filtering',
        'Email support',
        'Monthly analytics',
        'Company profile',
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Growth',
      price: '299',
      period: 'per month',
      description: 'Scale your hiring',
      features: [
        'Everything in Starter',
        'Unlimited job postings',
        'Advanced filtering',
        'Video interviews',
        'Priority support',
        'Event hosting',
        'Weekly analytics',
        'Branding customization',
      ],
      cta: 'Subscribe Now',
      popular: true,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'Full partnership',
      features: [
        'Everything in Growth',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solutions',
        'Training programs',
        'Event partnerships',
        'Custom analytics',
        '24/7 priority support',
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const tiers = role === 'learner' ? learnerTiers : employerTiers;

  const handleSelectTier = (tierName: string) => {
    // In a real app, this would handle checkout
    console.log(`Selected ${tierName} tier for ${role}`);
  };

  return (
    <div className="min-h-screen bg-background dark flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4">
              {role === 'learner'
                ? 'Choose Your Learning Path'
                : 'Choose Your Hiring Plan'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {role === 'learner'
                ? 'Select the plan that best fits your career goals and aspirations'
                : 'Select the plan that best fits your hiring needs and growth'}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={cn(
                  'relative group transition-all duration-300',
                  tier.popular && 'md:scale-105 md:col-span-1'
                )}
              >
                {/* Border Glow for Popular */}
                {tier.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg" />
                )}

                <div
                  className={cn(
                    'relative bg-card border-2 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col',
                    tier.popular
                      ? 'border-primary shadow-2xl'
                      : 'border-border hover:border-primary/50'
                  )}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-gradient-to-r from-primary to-brand-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-primary">
                          ${tier.price}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {tier.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSelectTier(tier.name)}
                    className={cn(
                      'w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2',
                      tier.popular
                        ? 'bg-gradient-to-r from-primary to-brand-600 text-white hover:shadow-lg'
                        : 'border-2 border-primary text-primary hover:bg-primary/10'
                    )}
                  >
                    {tier.cta}
                    {tier.popular && <ArrowRight size={20} />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Features Comparison Section */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Features Comparison
            </h2>

            {/* Animated List Example */}
            <div className="max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Available Features
              </h3>
              <AnimatedList
                items={
                  role === 'learner'
                    ? [
                        'Job Matching',
                        'Mentorship',
                        'Certifications',
                        'Community Access',
                        'Portfolio Building',
                        'Interview Prep',
                        'Resume Review',
                        'Networking Events',
                        'Career Coaching',
                        'Analytics Dashboard',
                      ]
                    : [
                        'Job Posting',
                        'Talent Filtering',
                        'Video Interviews',
                        'Analytics',
                        'Event Hosting',
                        'Branding Tools',
                        'Training Programs',
                        'Direct Messaging',
                        'Custom Reports',
                        'API Access',
                      ]
                }
                onItemSelect={(item) => console.log('Selected:', item)}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}
                itemsPerView={5}
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-card border border-border rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Can I change my plan anytime?
                </h4>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take
                  effect immediately.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Is there a trial period?
                </h4>
                <p className="text-muted-foreground">
                  Yes! All paid plans include a 7-day free trial so you can explore all
                  features risk-free.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for
                  enterprise plans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Do you offer refunds?
                </h4>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee if you're not satisfied with
                  your plan.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => navigate('/get-started')}
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              ← Back to Role Selection
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
