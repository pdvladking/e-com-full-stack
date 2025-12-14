import "./styles/globals.css";
import AuthProvider from "@/components/auth/AuthProvider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SidebarFilter from "@/components/ui/SidebarFilter";

export const metadata = {
  title: "My E-com App",
  description: "E-com full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />


          <main className="min-h-screen">
            
            <SidebarFilter />
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}