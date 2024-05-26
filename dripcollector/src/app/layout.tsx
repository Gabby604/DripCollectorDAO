import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drip Collector",
  description: "An innovative tool for collecting and managing your drips.",
  keywords: "drip collector, manage drips, productivity tool",
  openGraph: {
    type: 'website',
    title: 'Drip Collector',
    description: 'An innovative tool for collecting and managing your drips.',
    images: [
      {
        url: '../../public/LinkImage.png',
        width: 800,
        height: 600,
        alt: 'Drip Collector',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
    title: 'Drip Collector',
    description: 'An innovative tool for collecting and managing your drips.',
  },
  viewport: 'width=device-width, initial-scale=1.0',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
        </body>
    </html>
  );
}
