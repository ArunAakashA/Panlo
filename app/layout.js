import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header"; 
import Footer from "./components/footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Panlo",
  description: "Your Marketing Workflow Simplified",
  icons: {
    icon: "/decor-star.svg",      
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-jakarta antialiased`}>
        <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
