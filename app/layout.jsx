import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Aditia Nur Lukman",
  description: "Selamat datang di dunia Aditia Nur Lukman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetbrainsMono.variable}>{children}</body>
    </html>
  );
}
