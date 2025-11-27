import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "TechZone - Best Gadgets",
  description: "Your one stop shop for tech gadgets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow bg-cyan-200">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}