import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background dark flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-brand-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
