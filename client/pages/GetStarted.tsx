import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import Beams from "@/components/Beams";
import { cn } from "@/lib/utils";

export default function GetStarted() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<
    "learner" | "employer" | null
  >(null);

  const handleContinue = () => {
    if (selectedRole === "learner") {
      navigate("/membership?role=learner");
    } else if (selectedRole === "employer") {
      navigate("/membership?role=employer");
    }
  };

  const roles = [
    {
      id: "learner",
      title: "I am a Learner",
      description:
        "I want to grow, learn new skills, and connect with a global community",
      icon: Users,
      benefits: [
        "Access internship opportunities",
        "Learn from industry experts",
        "Connect with peers",
        "Gain certificates",
        "Attend exclusive events",
        "Build your portfolio",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "employer",
      title: "I am an Employer",
      description: "I want to hire talented individuals and partner with INGLU",
      icon: Briefcase,
      benefits: [
        "Access to vetted talent pool",
        "Post internship opportunities",
        "Organize corporate events",
        "Brand visibility",
        "Partnership opportunities",
        "Custom training programs",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background dark flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 max-w-lg">
            <div
              style={{ width: "400px", height: "400px", position: "relative" }}
            >
              <Beams
                beamWidth={2}
                beamHeight={15}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Welcome to INGLU
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path and unlock endless opportunities
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole === role.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    setSelectedRole(role.id as "learner" | "employer")
                  }
                  className={cn(
                    "group relative transition-all duration-300 text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isSelected && "scale-105",
                  )}
                >
                  {/* Card Border Glow */}
                  {isSelected && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 blur-lg" />
                  )}

                  <div
                    className={cn(
                      "relative bg-card border-2 rounded-2xl p-8 md:p-10 transition-all duration-300",
                      isSelected
                        ? "border-primary shadow-2xl"
                        : "border-border hover:border-primary/50",
                    )}
                  >
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-6 transition-transform duration-300",
                        role.color,
                        isSelected && "scale-110",
                      )}
                    >
                      <Icon size={32} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {role.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-8">
                      {role.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Selection Indicator */}
                    {isSelected && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary">
                          Selected
                        </span>
                        <div className="w-4 h-4 rounded-full bg-primary" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 border-2 border-border text-foreground rounded-lg hover:bg-card/50 transition-all duration-200 font-semibold text-center"
            >
              Back to Home
            </Link>
            <button
              onClick={handleContinue}
              disabled={!selectedRole}
              className={cn(
                "px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200",
                selectedRole
                  ? "bg-gradient-to-r from-primary to-brand-600 text-white hover:shadow-lg"
                  : "bg-muted text-muted-foreground cursor-not-allowed",
              )}
            >
              Continue
              {selectedRole && <ArrowRight size={20} />}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card rounded-xl border border-border">
              <p className="text-2xl font-bold text-primary mb-2">50K+</p>
              <p className="text-muted-foreground text-sm">Active Members</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <p className="text-2xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground text-sm">Partner Companies</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <p className="text-2xl font-bold text-primary mb-2">1000+</p>
              <p className="text-muted-foreground text-sm">Opportunities</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
