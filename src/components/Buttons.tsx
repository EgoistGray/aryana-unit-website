import Link from "next/link";
import { ComponentProps } from "react";

export default function Button({
   children,
   className = "",
   ...props
}: ComponentProps<"button">) {
   return (
      <button
         {...props}
         className={`flex items-center justify-center gap-2 py-4 px-10 font-semibold text-md rounded-full ease-in-out duration-150 select-none
         ${className}`}
      >
         {children}
      </button>
   );
}

export function LinkButton({
   children,
   className = "",
   ...props
}: ComponentProps<typeof Link>) {
   return (
      <Link
         {...props}
         className={`flex py-4 w-fit items-center justify-center gap-2  ease-in-out duration-150 select-none
         ${className}`}
      >
         {children}
      </Link>
   );
}
