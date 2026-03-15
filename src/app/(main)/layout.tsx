// src/app/(main)/layout.tsx
import { Navbar } from "@/components/shared/Navbar";
// import { Footer } from "@/components/shared/Footer"; // Uncomment when ready

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      
      {/* pt-24 pushes the page content below the fixed Navbar */}
      <main className="flex-1 w-full pt-24">
        {children}
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}