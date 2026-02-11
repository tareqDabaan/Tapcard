export interface ContactInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  position: string;
  location: string;
  website?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
  github?: string;
  socialLinks?: { label: string; url: string }[];
  avatar?: string;
   whatsapp?: string;
}

export function generateVCF(contact: ContactInfo): string {
  const fullName = `${contact.firstName} ${contact.lastName}`.trim();
  
  let vcf = `BEGIN:VCARD
VERSION:3.0
N:${contact.lastName};${contact.firstName};;;
FN:${fullName}
`;

  if (contact.company) {
    vcf += `ORG:${contact.company}\n`;
  }

  if (contact.position) {
    vcf += `TITLE:${contact.position}\n`;
  }

  if (contact.phone) {
    vcf += `TEL;TYPE=CELL:${contact.phone}\n`;
  }

  if (contact.email) {
    vcf += `EMAIL:${contact.email}\n`;
  }

  if (contact.location) {
    vcf += `ADR;TYPE=WORK:;;${contact.location};;;;\n`;
  }

  if (contact.website) {
    vcf += `URL:${contact.website}\n`;
  }

  if (contact.linkedin) {
    vcf += `X-SOCIALPROFILE;TYPE=linkedin:${contact.linkedin}\n`;
  }

  if (contact.twitter) {
    vcf += `X-SOCIALPROFILE;TYPE=twitter:${contact.twitter}\n`;
  }

  if (contact.instagram) {
    vcf += `X-SOCIALPROFILE;TYPE=instagram:${contact.instagram}\n`;
  }

  if (contact.facebook) {
    vcf += `X-SOCIALPROFILE;TYPE=facebook:${contact.facebook}\n`;
  }

  if (contact.github) {
    vcf += `X-SOCIALPROFILE;TYPE=github:${contact.github}\n`;
  }

  vcf += `END:VCARD`;

  return vcf;
}

export function downloadVCF(contact: ContactInfo): void {
  const vcfContent = generateVCF(contact);
  const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${contact.firstName}_${contact.lastName}.vcf`.replace(/\s+/g, '_');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
