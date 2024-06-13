import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Youssef Nesafe",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
