import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Community", href: "/community" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
              I
            </div>
            <span className="hidden sm:block font-bold text-lg text-foreground">
              INGLU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/get-started" className="bg-gradient-to-r from-primary to-brand-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold text-sm inline-block">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary hover:bg-muted px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full bg-gradient-to-r from-primary to-brand-600 text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold mt-2">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
