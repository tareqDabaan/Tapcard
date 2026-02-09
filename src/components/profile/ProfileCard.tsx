import { Button } from "@/components/ui/button";
import { downloadVCF, ContactInfo } from "@/lib/vcf";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Briefcase,
  Globe,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  MessageCircle
} from "lucide-react";

interface ProfileCardProps {
  profile: ContactInfo & { username?: string };
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const handleSaveContact = () => {
    downloadVCF(profile);
  };

  const socialLinks = [
    { icon: Linkedin, url: profile.linkedin, label: "LinkedIn" },
    { icon: Instagram, url: profile.instagram, label: "Instagram" },
    { icon: Twitter, url: profile.twitter, label: "X (Twitter)" },
    { icon: Facebook, url: profile.facebook, label: "Facebook" },
    { icon: Github, url: profile.github, label: "GitHub" },
    { icon: Globe, url: profile.website, label: "Website" },
  ].filter(link => link.url);
 
  const whatsappDigits = profile.whatsapp ? profile.whatsapp.replace(/\D/g, "") : "";
  const whatsappUrl = whatsappDigits ? `https://wa.me/${whatsappDigits}` : "";
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-2xl shadow-card overflow-hidden animate-scale-in">
        {/* Header with gradient */}
        <div className="h-24 gradient-hero relative">
          <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
        </div>

        {/* Avatar */}
        <div className="relative px-6 -mt-12">
          <div className="w-24 h-24 rounded-2xl bg-secondary border-4 border-card shadow-lg overflow-hidden">
            {profile.avatar ? (
              <img 
                src={profile.avatar} 
                alt={`${profile.firstName} ${profile.lastName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-muted-foreground">
                {profile.firstName?.[0]}{profile.lastName?.[0]}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 space-y-6">
          {/* Name & Title */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {profile.firstName} {profile.lastName}
            </h1>
            {profile.position && (
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Briefcase className="h-4 w-4" />
                {profile.position}
              </p>
            )}
            {profile.company && (
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Building2 className="h-4 w-4" />
                {profile.company}
              </p>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            {profile.email && (
              <a 
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate">{profile.email}</p>
                </div>
              </a>
            )}

            {profile.phone && (
              <a 
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium truncate">{profile.phone}</p>
                </div>
              </a>
            )}
            
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-sm font-medium truncate">{profile.whatsapp}</p>
                </div>
              </a>
            )}
            
            {profile.location && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium truncate">{profile.location}</p>
                </div>
              </div>
            )}
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Connect</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Save Contact Button */}
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full"
            onClick={handleSaveContact}
          >
            <Download className="h-5 w-5" />
            Save Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
