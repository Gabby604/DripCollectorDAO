import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drip Collector",
  description: "Drip Collector DAO",
  openGraph: {
    images: [
      {
        url: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*jYvHXTB5RaJVHWN3.png',
        width: 800,
        height: 600,
        alt: 'Drip',
      },
    ],
  }
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
