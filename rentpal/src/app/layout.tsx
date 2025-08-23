import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Rent Any - Property Rental Platform",
    template: "%s | Rent Any",
  },
  description: "Find and rent properties with ease using Rent Any - your trusted property rental platform.",
  keywords: ["property rental", "rent", "apartments", "houses", "real estate"],
  authors: [{ name: "Rent Any Team" }],
  creator: "Rent Any",
  publisher: "Rent Any",
  metadataBase: new URL(process.env['NEXT_PUBLIC_APP_URL'] || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Rent Any - Property Rental Platform",
    description: "Find and rent properties with ease using Rent Any - your trusted property rental platform.",
    siteName: "Rent Any",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Any - Property Rental Platform",
    description: "Find and rent properties with ease using Rent Any - your trusted property rental platform.",
    creator: "@rentany",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`font-inter antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
