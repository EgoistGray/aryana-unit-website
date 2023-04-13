import Link from "next/link";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import Logo from "@/assets/logo.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";

function Navlink({
   className = "",
   children,
   ...props
}: ComponentPropsWithoutRef<typeof Link> & PropsWithChildren) {
   return (
      <Link
         {...props}
         className={`text-xl mx-4 relative flex items-center justify-center
         before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full 
         before:h-0.5 before:ease-in-out before:duration-150 before:bg-black before:scale-0 
         before:hover:scale-100 ${className}`}
      >
         {children}
      </Link>
   );
}

export default function Navbar() {
   const { scrollYProgress } = useScroll();
   const backgroundColor = useTransform(scrollYProgress, val =>
      val > 0.1 ? "white" : "transparent"
   );
   const opacity = useTransform(scrollYProgress, val => (val > 0.1 ? 1 : 0));
   const x = useTransform(scrollYProgress, val => (val > 0.1 ? 0 : -10));

   return (
      <motion.div
         className=" z-50 w-full py-6 h-fit md:h-28 fixed top-0 left-0 flex flex-col md:flex-row md:justify-between items-center px-16 duration-200 ease-in-out"
         style={{
            backgroundColor
         }}
      >
         <motion.div
            className="hidden md:block duration-200 ease-in-out"
            animate={""}
            style={{
               x,
               opacity
            }}
         >
            <Image width={100} src={Logo} alt="logo" />
         </motion.div>
         <div className="flex gap-2 justify-between w-full md:w-auto">
            <Navlink href={"/"}>Home</Navlink>
            <Link
               href={`https://wa.me/6282122771000`}
               className="px-10 py-4 bg-red-500 rounded-full font-bold text-white"
            >
               CONTACT
            </Link>
         </div>
      </motion.div>
   );
}
