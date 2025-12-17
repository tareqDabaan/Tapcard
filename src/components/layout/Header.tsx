import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CreditCard, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLanding = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
            <CreditCard className="h-4 w-4 text-primary-foreground" />
          </div>
          <span>TapCard</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {isLanding && (
            <>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/auth?mode=signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {isLanding && (
              <>
                <a 
                  href="#features" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#pricing" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </>
            )}
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="ghost" asChild>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
