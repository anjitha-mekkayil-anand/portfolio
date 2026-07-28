import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://anjitha-mekkayil-anand.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Anjitha Mekkayil Anand — .NET & AI Systems Engineer",
  description:
    "I build systems that sense what's going wrong before it breaks — since 2006, from factory-floor microcontrollers to AI reasoning agents.",
  openGraph: {
    title: "Anjitha Mekkayil Anand — .NET & AI Systems Engineer",
    description:
      "Senior .NET engineer building human-in-the-loop AI systems. Anomaly detection since 2006: microcontrollers to reasoning agents.",
    type: "website",
    url: SITE,
    siteName: "Anjitha Mekkayil Anand",
    // Without an image here there is no link thumbnail anywhere — LinkedIn,
    // Slack, WhatsApp and X all fall back to a bare text card. Regenerate with
    // Technical/portfolio-og/render.py in the Noesis vault.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Anjitha Mekkayil Anand — I build systems that sense what's going wrong before it breaks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjitha Mekkayil Anand — .NET & AI Systems Engineer",
    description:
      "Senior .NET engineer building human-in-the-loop AI systems. Anomaly detection since 2006: microcontrollers to reasoning agents.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
