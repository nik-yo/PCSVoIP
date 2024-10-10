import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PCVoIP",
  description: "Powered by NikYo Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>
        {children}
        </main>        
        <footer>

        </footer>
      </body>
    </html>
  );
}
