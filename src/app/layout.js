import "./styles/globals.css";
import AuthProvider from "@/components/auth/AuthProvider";

export const metadata = {
  title: "My App",
  description: "E-com full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}