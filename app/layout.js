import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://israaboulaares-portfolio.vercel.app"),
  title: "Israa Boulaares | Full-Stack Engineer (NestJS, React, AI)",
  description:
    "Computer Science engineer (ESPRIT, 2026) building production full-stack SaaS with NestJS, React and MongoDB, including RAG-powered AI features. Open to full-stack roles in Europe or remote.",
  openGraph: {
    title: "Israa Boulaares | Full-Stack Engineer",
    description:
      "NestJS · React · AI-powered SaaS. Open to full-stack roles in Europe or remote.",
    url: "/",
    type: "website",
    images: [{ url: "/card.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto min-h-screen relative text-white">
          <Navbar />
          <ScrollToTop />
          <ToastContainer />
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
