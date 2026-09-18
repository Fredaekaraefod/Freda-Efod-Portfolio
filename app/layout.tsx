import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata: Metadata = {
  title: "Freda — Video Editor",
  description:
    "Freda is an independent video editor specializing in high-impact short-form reels, commercial cuts, and creator stories with razor-sharp pacing and sound design.",
  metadataBase: new URL("https://freda.video"),
  openGraph: {
    title: "Freda — Video Editor",
    description:
      "I edit video. Short-form reels, brand narratives, rhythm-driven cuts, and sound design.",
    url: "https://freda.video",
    siteName: "Freda Portfolio",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Freda Video Editing Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freda — Video Editor",
    description:
      "I edit video. Short-form reels, brand narratives, and rhythm-driven cuts.",
    images: ["/assets/og-image.svg"],
  },
  icons: {
    icon: "/assets/avatar.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="antialiased selection:bg-neutral-800 selection:text-white">
        <IntroAnimation />
        <Navbar />
        <main className="w-full px-8 md:px-16 lg:px-24">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
