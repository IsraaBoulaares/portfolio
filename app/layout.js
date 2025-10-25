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
  title: "Portfolio of Israa Boulaares - Software Developer",
  description:
    "This is the portfolio of Israa Boulaares. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
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
