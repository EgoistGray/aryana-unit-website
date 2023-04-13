import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/HeroBanner";
import Units from "@/sections/Units";
import { NextSeo, WebPageJsonLd } from "next-seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <main className="pointer-events-none">
         <NextSeo
            title="Aryana Residence | Yenyen Studio"
            description="Live vibrantly, live modernly. All you need is in here"
            openGraph={{
               type: "website",
               title: "Aryana Residence",
               description:
                  "Live vibrantly, live modernly. All you need is in here",
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
