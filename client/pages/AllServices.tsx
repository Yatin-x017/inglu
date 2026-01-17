import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedList from '@/components/AnimatedList';
import { ArrowRight, Zap } from 'lucide-react';
import Beams from '@/components/Beams';

const services = [
  {
    id: 'education',
    title: 'INGLU Education',
    description:
      'Skill-based training programs designed to enhance employability and career growth through industry-relevant courses and certifications.',
    icon: '🎓',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Startup India Certified Courses',
      'Expert Instructors',
      'Global Recognition',
      'Practical Projects',
      'Job Placement Support',
      'Lifetime Access',
      'Peer Community',
      'Mentorship Programs',
      'Career Guidance',
      'Industry Partnerships',
    ],
    programs: [
      'Digital Marketing Fundamentals',
      'Web Development Bootcamp',
      'Data Science Essentials',
      'Graphic Design Masterclass',
      'Social Media Strategy',
      'Leadership Development',
      'Business Analytics',
      'Content Creation',
    ],
    highlights: [
      'Learn from industry experts with 10+ years experience',
      'Hands-on projects that you can add to your portfolio',
      'Lifetime access to course materials and updates',
      'Join a community of 10,000+ learners',
      'Get certified and boost your resume',
    ],
  },
  {
    id: 'events',
    title: 'INGLU Events',
    description:
      'End-to-end event curation and execution focusing on income maximization and expense minimization.',
    icon: '🎉',
    color: 'from-purple-500 to-purple-600',
    features: [
      'Complete Event Management',
      'Income Optimization',
      'Expense Minimization',
      'Artist Management',
      'Production Services',
      'Security Management',
      'Vendor Coordination',
      'On-Ground Training',
      'Conference Organization',
      'Concert Management',
    ],
    programs: [
      'Corporate Conferences',
      'Product Launches',
      'Music Festivals',
      'Networking Events',
      'Workshops & Seminars',
      'Sports Events',
      'Virtual Events',
      'Brand Activations',
    ],
    highlights: [
      'Handled 100+ events with 500K+ attendees',
      'End-to-end service from concept to execution',
      'Partnerships with major brands and venues',
      'Professional production and security teams',
      'Proven track record of successful events',
    ],
  },
  {
    id: 'creators',
    title: 'INGLU Creators',
    description:
      'A vibrant community for content creators across digital, visual, and performing arts.',
    icon: '🎨',
    color: 'from-pink-500 to-pink-600',
    features: [
      'Networking Opportunities',
      'Workshops & Showcases',
      'Audience Growth Tools',
      'Collaboration Projects',
      'Mentorship from Experts',
      'Revenue Sharing Models',
      'Brand Partnerships',
      'Portfolio Building',
      'Exposure & Visibility',
      'Community Support',
    ],
    programs: [
      'Content Creator Fellowship',
      'Photography Masterclass',
      'Video Production Course',
      'Music Production Training',
      'Digital Art Workshop',
      'Influencer Marketing',
      'Podcast Production',
      'Comedy & Storytelling',
    ],
    highlights: [
      'Connect with 5,000+ creators worldwide',
      'Access exclusive brand collaboration opportunities',
      'Monetize your content with our revenue sharing',
      'Get featured in our platform and reach thousands',
      'Learn from top creators in your niche',
    ],
  },
  {
    id: 'esports',
    title: 'INGLU Esports',
    description:
      'Premier organization in competitive gaming, fostering esports talent through tournaments and community events.',
    icon: '🎮',
    color: 'from-orange-500 to-orange-600',
    features: [
      'High-Stakes Tournaments',
      'Gaming Leagues',
      'Community Events',
      'Team Management',
      'Coaching Programs',
      'Sponsorship Opportunities',
      'Prize Pools',
      'Streaming Support',
      'Player Development',
      'Tournament Organization',
    ],
    programs: [
      'CS:GO Pro League',
      'VALORANT Tournaments',
      'Mobile Gaming Championships',
      'Streaming Academy',
      'Gaming Coaching',
      'Team Formation Bootcamp',
      'Esports Management',
      'Content Creation for Gamers',
    ],
    highlights: [
      'Organize 50+ tournaments annually with 1M+ prize pool',
      'Train aspiring pro gamers with world-class coaches',
      'Connect gamers with sponsors and organizations',
      'Build communities around your favorite games',
      'Stream your gameplay to thousands of viewers',
    ],
  },
];

export default function AllServices() {
  return (
    <div className="min-h-screen bg-background dark flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              All INGLU Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive ecosystem designed to support every aspect of your journey.
              From education to entertainment, we've got everything you need to succeed.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-20 mb-20">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left Content */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="bg-card border border-border rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-foreground mb-4">Key Highlights:</h3>
                    <ul className="space-y-3">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-brand-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight size={20} />
                  </button>
                </div>

                {/* Right Content - Features & Programs */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  {/* Background Animation */}
                  <div className="relative">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div style={{ width: '300px', height: '300px', position: 'relative' }}>
                        <Beams
                          beamWidth={2}
                          beamHeight={12}
                          beamNumber={10}
                          lightColor="#a78bfa"
                          speed={1.5}
                          noiseIntensity={1.5}
                          scale={0.15}
                          rotation={0}
                        />
                      </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Features List */}
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Zap size={18} className="text-primary" />
                          Features
                        </h3>
                        <ul className="space-y-2">
                          {service.features.slice(0, 5).map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Programs List */}
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-4">Programs</h3>
                        <ul className="space-y-2">
                          {service.programs.slice(0, 4).map((program, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary">→</span>
                              {program}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Features List */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Complete Feature Set
            </h2>

            <div className="max-w-3xl mx-auto">
              <AnimatedList
                items={[
                  'Certification Programs',
                  'Event Management',
                  'Community Building',
                  'Mentorship Support',
                  'Job Placement',
                  'Networking Events',
                  'Career Coaching',
                  'Portfolio Building',
                  'Industry Partnerships',
                  'Premium Support',
                ]}
                onItemSelect={(item) => console.log('Selected:', item)}
                showGradients={true}
                enableArrowNavigation={true}
                displayScrollbar={true}
                itemsPerView={4}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore any of our services and join thousands of members already transforming
              their lives and careers.
            </p>
            <button className="bg-gradient-to-r from-primary to-brand-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all font-semibold text-lg inline-flex items-center gap-2">
              Start Your Journey
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
