import Logo from "@/assets/logo.png";
import Image from "next/image";
import FrontBanner from "@/assets/front-page.jpg";
import { Inter } from "next/font/google";
import Button from "@/components/Buttons";
import { AiOutlinePhone } from "react-icons/ai";

const inter = Inter({
   subsets: ["latin"]
});

export default function Hero() {
   return (
      <div
         className={`w-full min-h-screen bg-cover ${inter.className}`}
         style={{
            backgroundImage: `url(${FrontBanner.src})`
         }}
      >
         <div className="px-6 w-full h-full min-h-screen flex justify-center gap-3 items-center flex-col  bg-white/90">
            <Image src={Logo} alt="logo" />
            <div className="w-24 h-1 bg-red-500 rounded-full my-2 mb-5"></div>
            <h1 className="text-center text-3xl md:text-4xl font-light">
               Hunian Ideal Keluarga Muda
            </h1>
            <Button className="text-white bg-green-500 hover:bg-green-600">
               <AiOutlinePhone size={"1.25rem"} />
               JANJIAN SURVEY
            </Button>
         </div>
      </div>
   );
}
