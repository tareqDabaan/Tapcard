import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(searchParams.get("mode") === "signup");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    setIsSignUp(searchParams.get("mode") === "signup");
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (isSignUp && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Simulate auth - in production, connect to Supabase
    setTimeout(() => {
      toast({
        title: isSignUp ? "Account created!" : "Welcome back!",
        description: isSignUp 
          ? "Your account has been created successfully." 
          : "You have been signed in successfully.",
      });
      setLoading(false);
      // Redirect to edit profile after signup, dashboard after login
      window.location.href = isSignUp ? "/edit" : "/edit";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <CreditCard className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>TapCard</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </header>

      {/* Auth Form */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 animate-scale-in">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {isSignUp 
                ? "Start sharing your digital business card today" 
                : "Sign in to manage your digital business card"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>

          <div className="text-center text-sm">
            {isSignUp ? (
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-accent hover:underline font-medium"
                >
                  Sign in
                </button>
              </p>
            ) : (
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-accent hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
