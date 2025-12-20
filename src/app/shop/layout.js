import "./styles/globals.css";
import AuthProvider from "@/components/auth/AuthProvider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Playfair_Display,Poppins } from "next/font/google"

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "My E-com App",
  description: "E-com full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <AuthProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}