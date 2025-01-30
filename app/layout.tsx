import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
// import "easymde/dis/easymde.min.css";
// Define the local font with correct paths

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Mohammad Soltani Project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "WorkSans, sans-serif" }}>
        <main>
          <Navbar />
          {children}
          <Toaster/>
        </main>
      </body>
    </html>
  );
}
