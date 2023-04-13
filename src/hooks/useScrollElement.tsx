import { clip01 } from "@/utils/clip";
import { useMotionValue } from "framer-motion";
import { RefObject, useCallback, useEffect } from "react";

export default function useScrollElement(ref: RefObject<HTMLElement>) {
   const scrollProgress = useMotionValue(0);

   const computeProgress = useCallback(() => {
      if (!ref.current) return;
      const target = ref.current;
      const rect = target.getBoundingClientRect();
      const distFromTop = window.scrollY + rect.top;

      const start = window.innerHeight - target.clientHeight / 3;
      const end = 0;

      const from = Math.max(0, distFromTop - start);
      const to = distFromTop + rect.height + end;
      const distance = to - from;

      const progress = clip01((window.scrollY - from) / distance);
      scrollProgress.set(progress);
   }, [ref]);

   useEffect(() => {
      document.addEventListener("scroll", computeProgress);
      return () => {
         document.removeEventListener("scroll", computeProgress);
      };
   }, [ref]);

   return scrollProgress;
}
