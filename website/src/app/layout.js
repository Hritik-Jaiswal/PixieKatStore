import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import { NavigationProvider } from "@/contexts/navigation";
import { AuthProvider } from "@/contexts/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PixieKat Store",
  description: "Your one-stop shop for game top-ups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#1a103c] to-[#2d0808] min-h-screen text-white`}>
        <Toaster position="top-center" />
        <AuthProvider>
          <NavigationProvider>
            <div className="relative">
              {/* Background Effects */}
              <div className="fixed inset-0 z-0">
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-10"></div>
                <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-10"></div>
                <div className="absolute -bottom-32 right-32 w-96 h-96 bg-[#ff4d4d] rounded-full filter blur-[128px] opacity-10"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <Navbar />
                {children}
              </div>
            </div>
          </NavigationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
