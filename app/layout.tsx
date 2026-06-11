import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ostro Italian",
  description:
    "Authentic Italian dining, wine, pasta, seafood, and waterfront hospitality in Fremantle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
