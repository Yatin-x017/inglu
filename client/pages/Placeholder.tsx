import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background dark flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <Sparkles size={16} />
              Coming Soon
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {description}
            </p>

            <div className="bg-white border-2 border-dashed border-border rounded-2xl p-12 mb-8">
              <p className="text-muted-foreground mb-6">
                This section is being crafted to provide you with the best
                experience. Let us know what you'd like to see here!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Continue prompting to add content to this page.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-brand-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
