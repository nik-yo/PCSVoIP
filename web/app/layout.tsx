import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";

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
