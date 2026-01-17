import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
  gradient?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  features,
  gradient = "from-primary to-brand-600",
}: ServiceCardProps) {
  return (
    <Link to={href} className="group">
      <div className="h-full bg-white border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
}
