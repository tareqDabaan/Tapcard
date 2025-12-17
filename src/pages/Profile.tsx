import { useParams } from "react-router-dom";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { CreditCard } from "lucide-react";

// Demo profile data - in production this would come from database
const demoProfile = {
  firstName: "Sarah",
  lastName: "Mitchell",
  email: "sarah@example.com",
  phone: "+1 (555) 123-4567",
  company: "TechVentures Inc.",
  position: "Senior Product Designer",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/sarahmitchell",
  instagram: "https://instagram.com/sarahdesigns",
  twitter: "https://twitter.com/sarahm",
  github: "https://github.com/sarahmitchell",
  website: "https://sarahmitchell.design",
  avatar: "",
};

export default function Profile() {
  const { username } = useParams();

  // In production, fetch profile by username from database
  const profile = { ...demoProfile, username };

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle header */}
      <header className="py-4 px-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <CreditCard className="h-4 w-4" />
          <span className="text-xs font-medium">TapCard</span>
        </div>
      </header>

      {/* Profile content */}
      <main className="px-4 pb-8">
        <ProfileCard profile={profile} />
      </main>

      {/* Powered by footer */}
      <footer className="py-6 text-center">
        <a 
          href="/" 
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Get your own TapCard →
        </a>
      </footer>
    </div>
  );
}
