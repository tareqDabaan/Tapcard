import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { staticProfiles } from "@/data/staticProfiles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Link } from "react-router-dom";
import { 
  CreditCard, 
  Smartphone, 
  Download, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Check,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Sharing",
    description: "One tap is all it takes. Share your professional profile instantly with NFC technology."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Your digital card looks perfect on any device. Fast loading, responsive design."
  },
  {
    icon: Download,
    title: "VCF Download",
    description: "Let contacts save your info directly to their phone with one-click VCF export."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected. You control what information to share."
  },
  {
    icon: Globe,
    title: "Always Updated",
    description: "Change your info anytime. Your card is always current, never outdated."
  },
  {
    icon: Sparkles,
    title: "Professional Design",
    description: "Clean, modern layouts that make a lasting impression on every connection."
  }
];

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and add your contact details, social links, and professional info."
  },
  {
    number: "02",
    title: "Get Your NFC Card",
    description: "Order your custom NFC card linked to your unique profile URL."
  },
  {
    number: "03",
    title: "Tap & Connect",
    description: "Simply tap your card to any smartphone. Your profile opens instantly."
  }
];


export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 gradient-hero opacity-[0.02]" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
                <Sparkles className="h-4 w-4" />
                The future of networking is here
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up">
                Your Business Card,
                <br />
                <span className="text-accent">Reimagined</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Share your professional identity with a single tap. NFC-powered digital business cards that make lasting impressions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/auth?mode=signup">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/profile/demo">
                    View Demo Profile
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="mt-16 md:mt-24 relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="max-w-lg mx-auto">
                <div className="relative">
                  {/* Card mockup */}
                  <div className="aspect-[1.6/1] rounded-2xl gradient-hero p-6 shadow-xl">
                    <div className="h-full flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                            <CreditCard className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-primary-foreground/70 text-xs">QontaQ</p>
                            <p className="text-primary-foreground font-semibold">NFC Business Card</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                          <Zap className="h-4 w-4 text-accent-foreground" />
                        </div>
                      </div>
                      <div>
                        <p className="text-primary-foreground text-lg font-semibold">Tareq Dabaan</p>
                        <p className="text-primary-foreground/70 text-sm">Software Engineer</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
<section className="py-16">
  <div className="container">
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Friends Profiles</h2>
        <p className="text-muted-foreground mt-1">Static profiles (no login needed).</p>
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {staticProfiles.map((p) => (
        <Card key={p.username} className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">
              {p.firstName} {p.lastName}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {p.position}{p.company ? ` • ${p.company}` : ""}
            </p>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary overflow-hidden flex items-center justify-center font-semibold text-muted-foreground">
                {p.avatar ? (
                  <img src={p.avatar} alt={`${p.firstName} ${p.lastName}`} className="w-full h-full object-cover" />
                ) : (
                  <span>{p.firstName?.[0]}{p.lastName?.[0]}</span>
                )}
              </div>

              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{p.location}</div>
                <div className="text-xs text-muted-foreground truncate">@{p.username}</div>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link to={`/profile/${p.username}`}>Open Profile</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-secondary/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything you need to network smarter
              </h2>
              <p className="text-muted-foreground text-lg">
                Powerful features designed for modern professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  <div className="text-6xl font-bold text-accent/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to upgrade your networking?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of professionals who've made the switch to digital business cards.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/auth?mode=signup">
                  Create Your Card
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
