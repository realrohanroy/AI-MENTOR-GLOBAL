import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Mentor Global — Your Life. Your Information. Intelligently Managed.",
  description:
    "AI Mentor Global is an AI-powered digital information management platform helping Individuals, Families and Corporates organise, preserve, manage and securely share their important information.",
  keywords: [
    "AI document management",
    "personal information management",
    "digital information platform",
    "AI Mentor Global",
    "family document organizer",
    "secure document storage India",
    "DPIIT startup",
  ],
  authors: [{ name: "AI Mentor Private Limited" }],
  openGraph: {
    type: "website",
    url: "https://www.aimentorglobal.com",
    title: "AI Mentor Global — Intelligently Managed Information",
    description:
      "Upload. Organise. Preserve. Manage. Share. One AI-powered ecosystem for the information that matters.",
    siteName: "AI Mentor Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Mentor Global",
    description:
      "Upload. Organise. Preserve. Manage. Share. One AI-powered ecosystem for the information that matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AI Mentor Private Limited",
              url: "https://www.aimentorglobal.com",
              logo: "https://www.aimentorglobal.com/logo.svg",
              description:
                "AI-powered digital information management platform for individuals, families and corporates.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Sahyog Space, 7th Floor, Above Kotak Mahindra Bank, New Alkapuri",
                addressLocality: "Vadodara",
                addressRegion: "Gujarat",
                postalCode: "390021",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98250-40073",
                contactType: "general",
                email: "info@aimentorglobal.com",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
