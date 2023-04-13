import FrontBanner from "@/assets/front-page.jpg";
import Logo from "@/assets/logo.png";
import useScrollElement from "@/hooks/useScrollElement";
import { motion, useTransform } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const inter = Inter({
   subsets: ["latin"],
});

export default function Hero() {
   const ref = useRef(null);

   const scrollYProgress = useScrollElement(ref);
   const y = useTransform(scrollYProgress, (val) => {
      return `${val * -20}vh`;
   });

   return (
      <motion.div
         ref={ref}
         className={`w-full min-h-screen bg-cover sticky top-0 -z-10  ${inter.className}`}
         style={{
            backgroundImage: `url(${FrontBanner.src})`,
            y,
         }}
      >
         <motion.div className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-3 px-6 bg-white/90">
            <Image src={Logo} alt="logo" />
            <div className="w-24 h-1 my-2 mb-5 bg-red-500 rounded-full"></div>
            <h1 className="text-3xl font-light text-center md:text-4xl">
               Hunian Ideal Keluarga Muda
            </h1>
            {/* <Button className="text-white bg-green-500 hover:bg-green-600">
               <AiOutlinePhone size={"1.25rem"} />
               JANJIAN SURVEY
            </Button> */}
         </motion.div>
      </motion.div>
   );
}
