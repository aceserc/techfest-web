import type { Metadata } from "next";
import "./globals.css";
import { currentTechfest } from "@/data/techfest";
import TopLoader from "@/components/loaders/top-loader";
import { GoogleAnalytics } from "@next/third-parties/google";
import PageViews from "@/components/ga/page-views";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden scrollbar">
        {children}
        <TopLoader />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string}
        />
        <PageViews />
      </body>
    </html>
  );
}

// web metadata for SEO
export const metadata: Metadata = {
  title: {
    template: `%s | ${currentTechfest.label} - ACES Techfest`,
    default: `${currentTechfest.label} - ACES Techfest`,
  },
  description:
    "ACES Techfest is one of the largest and most established technological festivals in Eastern Nepal, It is a platform for students to showcase their technical skills and knowledge.",
  icons: [
    {
      url: "/assets/images/logo.png",
    },
  ],
  keywords: [
    "ACES",
    "Association of Computer Engineering Students",
    "Computer Engineering",
    "Engineering",
    "Computer",
    "ACES Nepal",
    "ACES Dharan",
    "ACES Dharan Nepal",
    "ACES IOE",
    "IOE",
    "Institute of Engineering",
    "IOE Purwanchal Campus",
    "Purwanchal Campus",
    "ACES Purwanchal Campus",
    "Computer Engineering Students",
    "Engineering Students",
    "Computer Students",
    "ACES Community",
    "ACES Community Nepal",
    "ACES Community Dharan",
    "ACES Community Dharan Nepal",
    "ACES Community IOE",
    "ACES Community IOE Purwanchal Campus",
    "ACES Community Purwanchal Campus",
    "ACES Techfest",
    "Techfest",
    "Techfest Nepal",
    "Techfest Dharan",
    "Techfest Dharan Nepal",
    "Techfest IOE",
    "Techfest IOE Purwanchal Campus",
    "Techfest Purwanchal Campus",
    "ACES Techfest Nepal",
    "ACES Techfest Dharan",
    "Delta",
    "Delta",
    "Delta Nepal",
  ],

  // developers contact links
  authors: [
    {
      name: "jrTilak",
      url: "https://jrtilak.dev",
    }
  ],
  category: "Engineering and Technology",

  // social media preview
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techfest.aceserc.org/",
    images: "/preview.png",
    countryName: "Nepal",
    title: `${currentTechfest.label} | ACES Techfest`,
    emails: ["aces@ioepc.edu.np"],
    description:
      "ACES Techfest is one of the largest and most established technological festivals in Eastern Nepal, It is a platform for students to showcase their technical skills and knowledge",
  },

  // robots.txt
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "standard",
      "max-snippet": -1,
    },
  },
};
