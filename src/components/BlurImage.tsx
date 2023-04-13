import Image from "next/image";
import { ComponentProps, useState } from "react";
export default function BlurImage({
   alt = "Invalid Image",
   className = "",
   ...props
}: ComponentProps<typeof Image>) {
   const [isLoaded, setLoaded] = useState(false);
   return (
      <Image
         onLoadingComplete={() => setLoaded(true)}
         placeholder="blur"
         className={`transition duration-1000 ease-in-out ${
            isLoaded ? "blur-0 scale-100" : "blur-3xl scale-110"
         } ${className}`}
         {...props}
         alt={alt}
      />
   );
}
