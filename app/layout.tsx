import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klingeman CPAs | Strategic Tax Advisory for Enterprise Clients",
  description: "Premier tax advisory firm led by former IRS management. Serving Fortune 500 companies, private equity firms, and high-net-worth individuals with sophisticated tax strategy and IRS defense.",
  keywords: "CPA, tax advisory, IRS management, corporate tax, high-net-worth, private equity, tax planning, Tulsa CPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
