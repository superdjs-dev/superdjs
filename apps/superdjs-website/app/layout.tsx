import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@public/globals.css";

export const metadata: Metadata = {
  title: "SuperDJS - Powerfull Discord JS Framework",
  description: "Powerfull Discord JS Framework with SuperDJS",
};

const inter = Inter({
  subsets: ["latin"],
});

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
