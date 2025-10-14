import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header"; // ✅ add this line

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add the weights you use in Figma
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Panlo",
  description: "Your Marketing Workflow Simplified",
  icons: {
    icon: "/decor-star.svg",        // ✅ default favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-jakarta antialiased`}>
        <Header /> {/* ✅ render header above all pages */}
        {children}
      </body>
    </html>
  );
}
