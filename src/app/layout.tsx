import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rekaz.com'),
  
  title: {
    template: "%s -Rekaz",
    default:"Rekaz - Create Your Own Website",
  },
  description:  "Create Your Own Website by Rekaz in a minutes. No code tool to create a website for your business",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rekaz - Create Your Own Website",
    description:  "Create Your Own Website by Rekaz in a minutes. No code tool to create a website for your business",
    locale: "en",
    siteName: 'Rekaz',
    images: [
      {
        url: '/ogImage.png',
        type: 'image/png',
        alt: 'Rekaz',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'Rekaz',
    title: "Rekaz - Create Your Own Website",
    description:  "Create Your Own Website by Rekaz in a minutes. No code tool to create a website for your business",
    site: 'Rekaz',
    images: [
      {
        url: '/ogImage.png',
        width: 2400,
        height: 1256,
        username: 'Rekaz',
        type: 'image/png',
        alt: 'Rekaz',
      },
    ],
  },
  appleWebApp: {
    title: 'Rekaz',
    statusBarStyle: 'black-translucent',
    capable: true,
    startupImage: '/icon.png',
  },

 
  appLinks: {
    android: {
      app_name: 'Rekaz',
      package: 'io.rekaz.admin',
      url: 'https://play.google.com/store/apps/details?id=io.rekaz.admin&pcampaignid=web_share',
    },
    ios: {
      app_name: 'Rekaz',
      app_store_id: ' 6739815301',
      url: 'https://apps.apple.com/sa/app/%D8%B1%D9%83%D8%A7%D8%B2/id6739815301',
    },
    iphone: {
      app_name: 'Rekaz',
      app_store_id: ' 6739815301',
      url: 'https://apps.apple.com/sa/app/%D8%B1%D9%83%D8%A7%D8%B2/id6739815301',
    },
    ipad: {
      app_name: 'Rekaz',
      app_store_id: ' 6739815301',
      url: 'https://apps.apple.com/sa/app/%D8%B1%D9%83%D8%A7%D8%B2/id6739815301',
    },
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Header */}

        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
