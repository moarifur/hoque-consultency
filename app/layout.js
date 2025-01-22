import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hoque Consultancy",
    description: "Our service, your satisfaction",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        <div className="mt-16">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}