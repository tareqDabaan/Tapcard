import { useParams, Link } from "react-router-dom";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { CreditCard } from "lucide-react";
import { staticProfilesByUsername } from "@/data/staticProfiles"; // ✅ add this

const demoProfile = {
  firstName: "Tareq",
  lastName: "Dabaan",
  email: "tareqdab2000@gmail.com",
  phone: "+965 90956148",
  company: "Tap Card.",
  position: "CEO-Software Engineer",
  location: "Kuwait",
  linkedin: "https://www.linkedin.com/in/tareq-dabaan-647513225/",
  instagram: "https://instagram.com/tareqdabaan",
  github: "https://github.com/tareqDabaan",
  website: "https://tareqdabaan.github.io/my_portfolio/",
  avatar: "",
};

export default function Profile() {
  const { username = "demo" } = useParams();

  const staticProfile = staticProfilesByUsername[username.toLowerCase()];
  const profile = staticProfile ?? { ...demoProfile, username };

  return (
    <div className="min-h-screen bg-background">
      <header className="py-4 px-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <CreditCard className="h-4 w-4" />
          <span className="text-xs font-medium">QontaQ</span>
        </div>
      </header>

      <main className="px-4 pb-8">
        <ProfileCard profile={profile} />
      </main>

      <footer className="py-6 text-center">
        <Link
          to="/"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Get your own Card →
        </Link>
      </footer>
    </div>
  );
}
