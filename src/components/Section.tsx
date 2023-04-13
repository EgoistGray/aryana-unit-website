import { motion } from "framer-motion";
import { ComponentProps } from "react";

export default function Section({
   className,
   children,
   ...props
}: ComponentProps<"section">) {
   return (
      <section {...props} className={`w-full p-12 py-24 bg-white ${className}`}>
         <div className="mx-auto max-w-7xl">{children}</div>
      </section>
   );
}

const MotionSection = motion(Section);
export { MotionSection };
