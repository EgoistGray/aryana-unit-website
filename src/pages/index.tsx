import { Inter } from "next/font/google";
import Hero from "@/sections/HeroBanner";
import Head from "next/head";
import AboutUs from "@/sections/AboutUs";
import Units from "@/sections/Units";
import { NextSeo, WebPageJsonLd } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <main>
         <NextSeo
            title="Aryana Residence | Yenyen Studio"
            description="Live vibrantly, live modernly. All you need is in here"
            openGraph={{
               type: "website",
               title: "Aryana Residence",
               description:
                  "Live vibrantly, live modernly. All you need is in here"
            }}
         />
         <WebPageJsonLd
            id={"aryana"}
            description={"Live vibrantly. Live modernly"}
         />
         <Hero />
         <AboutUs />
         <Units />
      </main>
   );
}
