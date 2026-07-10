import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjitha Mekkayil Anand — .NET & AI Systems Engineer",
  description:
    "I build systems that sense what's going wrong before it breaks — twenty years of it, from factory-floor microcontrollers to AI reasoning agents.",
  openGraph: {
    title: "Anjitha Mekkayil Anand — .NET & AI Systems Engineer",
    description:
      "Senior .NET engineer building human-in-the-loop AI systems. Twenty years of anomaly detection: microcontrollers to reasoning agents.",
    type: "website",
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
