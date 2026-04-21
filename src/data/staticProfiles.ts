import type { ContactInfo } from "@/lib/vcf";

export type StaticProfile = ContactInfo & { username: string };

// Put avatar images in: /public/avatars/
// Example: /public/avatars/ali.jpg
const avatar = (fileName: string) => `${import.meta.env.BASE_URL}avatars/${fileName}`;

export const staticProfiles: StaticProfile[] = [
  {
    username: "Dr.Abdelrahman",
    firstName: "Dr.Abdelrahman",
    lastName: "El-Gaml",
    email: "abdelrahmanaljaml@gmail.com",
    phone: "+965 69054611",
    whatsapp: "+96569054611",

    company: "Smart Life.",
    position: "Medical Representative",
    location: "Kuwait, Qibla, Block 5 Building 1 - First Floor",
    instagram: "https://www.instagram.com/dr.aelgaml",
    socialLinks: [
      { type:"instagram", label: "Instagram (Business)", url: "https://www.instagram.com/smartlife.company" },
    ],
    linkedin: "https://www.linkedin.com/in/abdelrahman-elgaml-285a36255/",
    avatar: avatar("abdelrahman.png "),
  },
  {
    username: "AbdullahEnawi",
    firstName: "Abdullah",
    lastName: "Enawi",
    email: "abdullah.omar.enawi@gmail.com",
    phone: "+965 60616836",
    whatsapp: "+96560616836",

    // company: "Smart Life.",
    position: "Promoter",
    location: "Kuwait, Kuwait City",
    instagram: "https://www.instagram.com/aboodi_enawi",
    // socialLinks: [
    //   { type:"instagram", label: "Instagram (Business)", url: "https://www.instagram.com/smartlife.company" },
    // ],
    avatar: avatar("abdullahenawi.jpg "),
  },
  {
  username: "CatherineArguelles",
  firstName: "Catherine",
  lastName: "Arguelles",
  email: "SDATrainer_catRDH@outlook.com",
  phone: "+965 51662646",
  whatsapp: "+96551662646",

  company: "Swiss Dental Academy (SDA) / Dr. Nael Alhazeem Dental Center",
  position: "Registered Dental Hygienist (RDH) | SDA GBT Trainer | GBT Clinician",
  location: "Kuwait (Al-Tijaria Tower) / Nyon, Switzerland",
  instagram: "https://www.instagram.com/toothfairy_katie",
  linkedin: "https://www.linkedin.com/in/catherine-arguelles-rdh-197886a1",
  socialLinks: [
    { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/catherine-arguelles-rdh-197886a1" },
    { type: "instagram", label: "Instagram", url: "https://www.instagram.com/toothfairy_katie" },
    { type: "email", label: "Work Email", url: "mailto:c.arguelles@naelalhazeem.com" },
    { type: "email", label: "Trainer Email", url: "mailto:SDATrainer_catRDH@outlook.com" },
  ],
  avatar: avatar("IMG_1795.jpeg"),
}
];

// Helpful lookup by username
export const staticProfilesByUsername = Object.fromEntries(
  staticProfiles.map((p) => [p.username.toLowerCase(), p]),
);
