import { ArrowRight, CheckCircle, Sparkles, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Beams from "@/components/Beams";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function Index() {
  const services = [
    {
      title: "INGLU Education",
      description:
        "Globally recognized skill-based courses with Startup India certification. Enhance your employability with industry-relevant training.",
      href: "/all-services",
      icon: <Sparkles size={24} />,
      features: ["Certified Courses", "Expert Instructors", "Global Recognition"],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "INGLU Events",
      description:
        "Full-service event curation and execution. From production to management, we handle every aspect of memorable events.",
      href: "/all-services",
      icon: <Zap size={24} />,
      features: ["Income Optimization", "Expense Minimization", "End-to-End Service"],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "INGLU Creators",
      description:
        "Platform for content creators across digital, visual, and performing arts. Grow your audience and refine your craft.",
      href: "/all-services",
      icon: <Users size={24} />,
      features: ["Networking", "Workshops", "Exposure Opportunities"],
      gradient: "from-pink-500 to-pink-600",
    },
    {
      title: "INGLU Esports",
      description:
        "Premier organization in competitive gaming. Fostering esports talent through tournaments and community events.",
      href: "/all-services",
      icon: <Award size={24} />,
      features: ["Tournaments", "Leagues", "Community Building"],
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    { number: "50K+", label: "Community Members" },
    { number: "100+", label: "Partner Companies" },
    { number: "1000+", label: "Internships Provided" },
    { number: "50+", label: "Events Organized" },
  ];

  const whyChooseFeatures = [
    {
      icon: <CheckCircle size={20} />,
      title: "Holistic Development",
      description:
        "Education, Enhancement, and Entertainment combined for complete growth",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Real-World Experience",
      description:
        "Gain practical skills beyond traditional academics through hands-on projects",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Global Community",
      description:
        "Connect with thousands of young professionals worldwide on your journey",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Industry Partnerships",
      description:
        "Access to leading companies including OYO, Pizza Hut, and British Council",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-background relative overflow-hidden">
        {/* Beams Animation Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 max-w-2xl">
            <div style={{ width: '600px', height: '600px', position: 'relative' }}>
              <Beams
                beamWidth={2}
                beamHeight={20}
                beamNumber={12}
                lightColor="#a78bfa"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <Sparkles size={16} />
              Welcome to INGLU Global
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Empower Your Future with Holistic Youth Development
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Join the fastest-growing global youth community. Experience Education +
              Enhancement + Entertainment (E³) through internships, events, and
              community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" className="bg-gradient-to-r from-primary to-brand-600 text-white px-8 py-3.5 rounded-lg hover:shadow-xl transition-all duration-200 font-semibold flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight size={20} />
              </Link>
              <Link to="/all-services" className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg hover:bg-primary/5 transition-all duration-200 font-semibold">
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 pt-12 md:pt-16 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive ecosystem designed to support every aspect
              of your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                features={service.features}
                gradient={service.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose INGLU */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose INGLU?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just a community—we're your partner in shaping the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 text-primary">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-primary/10 border-t border-border border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of young professionals in the INGLU community. Start
            your journey with our E³ Model today.
          </p>
          <Link to="/get-started" className="bg-gradient-to-r from-primary to-brand-600 text-white px-10 py-4 rounded-lg hover:shadow-xl transition-all duration-200 font-semibold text-lg inline-flex items-center gap-2">
            Join INGLU Today
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
