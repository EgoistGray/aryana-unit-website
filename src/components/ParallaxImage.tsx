import useScrollElement from "@/hooks/useScrollElement";
import { useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ParallaxImage({
   src,
   className = "",
   imgClassName = ""
}: {
   src: string;
   className?: string;
   imgClassName?: string;
}) {
   const ref = useRef(null);
   const scrollYProgress = useScrollElement(ref);

   const translateY = useTransform(
      scrollYProgress,
      val => `${(val / 7) * -85}%`
   );

   return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
         <motion.div
            className={`w-full h-[150%] will-change-transform bg-cover bg-center mx-auto ${imgClassName}`}
            style={{
               backgroundImage: `url(${src})`,
               translateY: translateY
            }}
         />
      </div>
   );
}
