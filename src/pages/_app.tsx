import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AnimatePresence mode="wait">
         <Navbar />
         <Component {...pageProps} />
         <Footer />
      </AnimatePresence>
   );
}
