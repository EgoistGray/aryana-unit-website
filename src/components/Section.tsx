import { ComponentProps } from "react";

export default function Section({
   className,
   children,
   ...props
}: ComponentProps<"section">) {
   return (
      <section
         {...props}
         className={`w-full p-12 py-24 mx-auto max-w-7xl ${className}`}
      >
         {children}
      </section>
   );
}
