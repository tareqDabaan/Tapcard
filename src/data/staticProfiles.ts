import type { ContactInfo } from "@/lib/vcf";

export type StaticProfile = ContactInfo & { username: string };

// Put avatar images in: /public/avatars/
// Example: /public/avatars/ali.jpg
const avatar = (fileName: string) => `${import.meta.env.BASE_URL}avatars/${fileName}`;

export const staticProfiles: StaticProfile[] = [
  {
    username: "Dr.Abdelrahman",
    firstName: "Dr.Adbelrahman",
    lastName: "Elgamal",
    email: "abdelrahmanaljaml@gmail.com",
    phone: "+965 69054611",
    company: "Smart Life.",
    position: "Medical Representative",
    location: "Kuwait, Qibla, Block 5 Building 1 - First Floor",
    instagram: "https://www.instagram.com/dr.aelgaml",
    linkedin: "https://www.linkedin.com/in/abdelrahman-elgaml-285a36255/",
    avatar: avatar("abdelrahman.png "),
  }
];

// Helpful lookup by username
export const staticProfilesByUsername = Object.fromEntries(
  staticProfiles.map((p) => [p.username.toLowerCase(), p]),
);
