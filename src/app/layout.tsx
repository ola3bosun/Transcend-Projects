import { Inter, Space_Mono } from "next/font/google"; 
import "./globals.css";

import { Preloader } from "@/components/shared/Preloader";
import { CustomCursor } from "@/components/shared/CustomCursor";

const sans = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "Transcend Projects | Command Center",
  description: "Engineering the Future Built Environment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} antialiased min-h-screen bg-background text-foreground`}>
        <Preloader />
        <CustomCursor />
        
        {/* The children will either be the 404 page, OR the (main) layout */}
        {children}
          
      </body>
    </html>
  );
}