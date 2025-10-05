import Header from "@/components/header";
import Footer from "../components/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Talrn",
  description: "Find & Hire iOS Developers with Ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header */}
        <Header/>
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <Footer/>
      </body>
    </html>
  );
}
