import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "INGLU Education", href: "/services" },
        { label: "INGLU Events", href: "/services" },
        { label: "INGLU Creators", href: "/services" },
        { label: "INGLU Esports", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Community", href: "/community" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Contact", href: "/contact" },
        { label: "Support", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-background via-background to-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                I
              </div>
              <span className="font-bold text-lg text-foreground">INGLU</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Empowering the next generation through education, enhancement, and
              entertainment.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 pb-12 border-b border-border">
          <div className="flex gap-3 items-start">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Address</p>
              <p className="text-muted-foreground text-sm">
                Satya Niketan, New Delhi, India
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Phone</p>
              <p className="text-muted-foreground text-sm">
                +91 (XXX) XXX-XXXX
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Email</p>
              <p className="text-muted-foreground text-sm">
                hello@ingluglobal.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} INGLU Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
