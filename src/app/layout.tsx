import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./globals.css";

import { AppProvider } from "@/providers/app-provider";

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
});

export const metadata: Metadata = {
  title: "Hệ thống nhà thuốc Phamacity",
  description: "Hệ thống nhà thuốc Phamacity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.variable}>
        <NextTopLoader showSpinner={false}/>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
