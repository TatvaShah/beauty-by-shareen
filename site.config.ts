import type { SiteConfig } from "@/lib/types";

const g = (n: number, w: number, h: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width: w, height: h, alt, caption, href });

export const site: SiteConfig = {
  name: "Beauty by Shareen",
  tagline: "Mobile bridal makeup artist serving Brampton, Mississauga, Toronto and the GTA.",
  category: "Bridal makeup artist",
  schemaType: "BeautySalon",
  area: "Brampton, Mississauga and the GTA, ON",
  siteUrl: "https://beauty-by-shareen.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#856b62" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Bookings open for 2026/27",
    headline: "Bridal glam that comes to you",
    subhead: "Soft Glam, Signature Glam and full hair and makeup, with over 10 years of bridal experience. Mobile across the GTA and available to travel. Send a DM with your date to check availability.",
    images: [
      { src: "/images/post-5.jpg", alt: "Signature Glam bridal makeup by Beauty by Shareen" },
      { src: "/images/post-2.jpg", alt: "Soft Glam makeup look" },
      { src: "/images/post-11.jpg", alt: "Signature bridal glam" },
    ],
    secondaryCta: { label: "See the looks", href: "#gallery" },
  },

  highlights: ["10+ years of bridal makeup", "Mobile across the GTA", "Available to travel", "1:1 makeup classes"],

  about: {
    title: "Your glam, wherever you get ready",
    body: [
      "Hi, I'm Shareen, a bridal makeup artist with more than 10 years of experience. I come to you across Brampton, Mississauga, Toronto and the wider GTA, and I am happy to travel for your big day.",
      "Whether you love a soft, glowing look or a full Signature Glam, every look is built around you. I also offer 1:1 makeup classes if you want to learn to do it yourself.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Signature Glam makeup look" },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Every booking is quoted by DM based on your date, location and the look you want.",
    variant: "list",
    groups: [
      {
        title: "Makeup",
        note: "Price on consultation",
        items: [
          { name: "Bridal makeup", description: "Your wedding day look, done wherever you are getting ready." },
          { name: "Soft Glam", description: "Soft, glowing and polished.", href: "https://www.instagram.com/p/DfAqfpeRCk3/" },
          { name: "Signature Glam", description: "A fuller, statement glam.", href: "https://www.instagram.com/p/De9hFf8lnZq/" },
          { name: "Hair and makeup", description: "Full hair and makeup for your event." },
        ],
      },
      {
        title: "Classes",
        note: "Price on consultation",
        items: [{ name: "1:1 makeup classes", description: "One on one lessons to learn your own glam." }],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      g(5, 1080, 1440, "Signature Glam look", "Signature Glam", "https://www.instagram.com/p/De9hFf8lnZq/"),
      g(2, 1080, 1339, "Soft Glam look", "Soft Glam", "https://www.instagram.com/p/DfAqfpeRCk3/"),
      g(11, 1080, 1358, "Signature bridal glam", "Signature Bridal Glam", "https://www.instagram.com/p/DN6Uee4D8Sf/"),
      g(6, 1080, 1440, "Signature Glam look", "Signature Glam", "https://www.instagram.com/p/De9g2hvll4s/"),
      g(3, 1080, 1342, "Soft Glam look", "Soft Glam", "https://www.instagram.com/p/DfAqbwjRq5t/"),
      g(8, 1080, 1217, "Signature Glam look", "Signature Glam", "https://www.instagram.com/p/Dc99q4UMss7/"),
      g(12, 1080, 1440, "Signature bridal glam", "Signature Bridal Glam", "https://www.instagram.com/p/DN6UWOSD6zQ/"),
      g(9, 1080, 1229, "Signature Glam look", "Signature Glam", "https://www.instagram.com/p/Dc99or8seva/"),
    ],
  },

  instagram: {
    handle: "beautybyshareen",
    embeds: ["https://www.instagram.com/p/DfAqhmrRsCM/"],
    embedsTitle: "Latest from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Bookings are open for 2026/27. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Shareen! I would love to book with you.\nEvent date:\nNumber of people (bride, party):\nLook (Soft Glam, Signature Glam, hair and makeup):\nLocation:\nDesign idea (I can send an inspo photo):",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "Where do you work?", a: "I am mobile across Brampton, Mississauga, Toronto and the GTA, and available to travel." },
    { q: "How do I book?", a: "Send a DM on Instagram with your date, location and the look you want. Bookings for 2026/27 are open now." },
    { q: "Do you teach makeup?", a: "Yes, 1:1 makeup classes are available. Send a DM to ask about dates." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mobile across Brampton, Mississauga, Toronto and the GTA",
    socials: [],
  },

  seo: {
    title: "Beauty by Shareen | Bridal makeup artist in Brampton and the GTA",
    description: "Mobile bridal makeup artist in Brampton, Mississauga and Toronto with 10+ years of experience. Soft and Signature Glam, 1:1 classes. Book by Instagram DM.",
    keywords: ["bridal makeup artist Brampton", "Mississauga makeup artist", "Toronto bridal makeup", "GTA mobile makeup artist"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
