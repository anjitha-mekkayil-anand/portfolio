import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const SITE = "https://anjitha-mekkayil-anand.vercel.app";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

const TITLE = "Anjitha Mekkayil Anand · Senior .NET Engineer";
const DESCRIPTION =
  "Old, tangled systems are where I'm most useful: I learn them, find what's really breaking, and make them easier to change. Ten years in .NET, twelve in software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE,
    siteName: "Anjitha Mekkayil Anand",
    // Without an image here there is no link thumbnail anywhere: LinkedIn,
    // Slack, WhatsApp and X all fall back to a bare text card. Regenerate with
    // Technical/portfolio-og/render.py in the Noesis vault.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Anjitha Mekkayil Anand, Senior .NET Engineer: old, tangled systems are where I'm most useful" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
