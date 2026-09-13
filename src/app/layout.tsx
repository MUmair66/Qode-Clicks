import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QodeClick | Professional Web Design, SEO & Digital Growth",
  description:
    "QodeClick builds premium websites, SEO systems, paid campaigns, and analytics workflows for service businesses ready to grow.",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#05070d] text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
