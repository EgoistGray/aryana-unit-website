import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
   return (
      <AnimatePresence mode="wait">
         <Navbar key={"navbar"} />
         <Component {...pageProps} />
         <Footer key={"footer"} />
      </AnimatePresence>
   );
}
