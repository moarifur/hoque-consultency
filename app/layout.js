import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["Poppins"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["Poppins"],
});

export const metadata = {
    title: "Hoque Consultancy",
    description: "Our service, your satisfaction",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
