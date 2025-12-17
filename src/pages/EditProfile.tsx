import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  CreditCard, 
  ArrowLeft, 
  Save, 
  Eye,
  User,
  Building2,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Github,
  Camera
} from "lucide-react";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  location: string;
  website: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  facebook: string;
  github: string;
  avatar: string;
}

const initialProfile: ProfileData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  location: "",
  website: "",
  linkedin: "",
  instagram: "",
  twitter: "",
  facebook: "",
  github: "",
  avatar: "",
};

export default function EditProfile() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    
    // Validate required fields
    if (!profile.firstName || !profile.lastName) {
      toast({
        title: "Error",
        description: "First name and last name are required.",
        variant: "destructive",
      });
      setSaving(false);
      return;
    }

    // Simulate save - in production, save to database
    setTimeout(() => {
      toast({
        title: "Profile saved!",
        description: "Your digital business card has been updated.",
      });
      setSaving(false);
    }, 1000);
  };

  const inputGroups = [
    {
      title: "Personal Information",
      fields: [
        { name: "firstName", label: "First Name", icon: User, type: "text", placeholder: "John", required: true },
        { name: "lastName", label: "Last Name", icon: User, type: "text", placeholder: "Doe", required: true },
      ]
    },
    {
      title: "Professional Details",
      fields: [
        { name: "company", label: "Company", icon: Building2, type: "text", placeholder: "Acme Inc." },
        { name: "position", label: "Job Title", icon: Briefcase, type: "text", placeholder: "Product Designer" },
      ]
    },
    {
      title: "Contact Information",
      fields: [
        { name: "email", label: "Email", icon: Mail, type: "email", placeholder: "john@example.com" },
        { name: "phone", label: "Phone", icon: Phone, type: "tel", placeholder: "+1 (555) 123-4567" },
        { name: "location", label: "Location", icon: MapPin, type: "text", placeholder: "San Francisco, CA" },
      ]
    },
    {
      title: "Social Links",
      fields: [
        { name: "website", label: "Website", icon: Globe, type: "url", placeholder: "https://yourwebsite.com" },
        { name: "linkedin", label: "LinkedIn", icon: Linkedin, type: "url", placeholder: "https://linkedin.com/in/username" },
        { name: "instagram", label: "Instagram", icon: Instagram, type: "url", placeholder: "https://instagram.com/username" },
        { name: "twitter", label: "X (Twitter)", icon: Twitter, type: "url", placeholder: "https://twitter.com/username" },
        { name: "facebook", label: "Facebook", icon: Facebook, type: "url", placeholder: "https://facebook.com/username" },
        { name: "github", label: "GitHub", icon: Github, type: "url", placeholder: "https://github.com/username" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <CreditCard className="h-4 w-4 text-primary-foreground" />
            </div>
            <span>TapCard</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/profile/demo">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Link>
            </Button>
            <Button variant="hero" size="sm" onClick={handleSave} disabled={saving}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 pb-24">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Page Title */}
          <div className="space-y-2">
            <Button variant="ghost" size="sm" asChild className="-ml-2">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to home
              </Link>
            </Button>
            <h1 className="text-2xl font-bold">Edit Your Profile</h1>
            <p className="text-muted-foreground">
              Customize your digital business card with your professional information.
            </p>
          </div>

          {/* Avatar Section */}
          <div className="bg-card rounded-2xl shadow-card p-6">
            <h2 className="text-lg font-semibold mb-4">Profile Photo</h2>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-md hover:bg-accent/90 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Upload a professional photo for your digital card.
                </p>
                <Input
                  type="url"
                  name="avatar"
                  value={profile.avatar}
                  onChange={handleChange}
                  placeholder="Or paste an image URL"
                  className="max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* Form Sections */}
          {inputGroups.map((group) => (
            <div key={group.title} className="bg-card rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-semibold mb-4">{group.title}</h2>
              <div className="grid gap-4">
                {group.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="flex items-center gap-2">
                      <field.icon className="h-4 w-4 text-muted-foreground" />
                      {field.label}
                      {field.required && <span className="text-destructive">*</span>}
                    </Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={profile[field.name as keyof ProfileData]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Save Button (Mobile) */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-border md:hidden">
            <Button variant="hero" size="lg" className="w-full" onClick={handleSave} disabled={saving}>
              <Save className="h-5 w-5 mr-2" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
