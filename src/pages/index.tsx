import { Inter } from "next/font/google";
import Hero from "@/sections/HeroBanner";
import Head from "next/head";
import AboutUs from "@/sections/AboutUs";
import Units from "@/sections/Units";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <main>
         <Head>
            <title>Arayana Serpong</title>
         </Head>
         <Hero />
         <AboutUs />
         <Units />
      </main>
   );
}
