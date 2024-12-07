import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/app/components/ModeToggle";




export const metadata: Metadata = {
  title: "HNQ Shop",
  description: "HNQ - eCommerce Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu/>
          {children}
          <Footer />
          <ModeToggle/>
        </ThemeProvider>
      </body>
    </html>
  );
}
