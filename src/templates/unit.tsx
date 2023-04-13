import { Autoplay, Navigation, Pagination, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Variants, motion } from "framer-motion";

import { LinkButton } from "@/components/Buttons";
import Image, { StaticImageData } from "next/image";
import { AiOutlineDoubleRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import { metersquared } from "@/utils/decor";

const ParentVariants: Variants = {
   hidden: {},
   show: {
      transition: {
         staggerChildren: 0.1
      }
   }
};
const UnitVariants: Variants = {
   hidden: {
      opacity: 0,
      y: 10
   },
   show: {
      opacity: 1,
      y: 0
   }
};

function UnitInfo({
   title,
   content
}: {
   title: React.ReactNode;
   content: React.ReactNode;
}) {
   return (
      <motion.div>
         <div className="md:hidden h-px w-full bg-neutral-300 rounded-full my-4"></div>
         <div className="text-xl mb-2 font-bold text-neutral-800">{title}</div>
         <motion.div variants={UnitVariants} className="text-5xl font-light">
            {content}
         </motion.div>
      </motion.div>
   );
}

type BuildingInfo = {
   groundArea: number;
   buildingArea: number;
   bathroom: number;
   bedroom: number;
};

type MarketingInfo = {
   name: string;
   price: string;
   images: StaticImageData[];
   whatsappMessage: string;
};

type UnitInfo = BuildingInfo & MarketingInfo;

export default function Unit(info: UnitInfo) {
   return (
      <div className="my-20">
         <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay, Zoom]}
            pagination={{ clickable: true }}
            zoom={{ toggle: true, maxRatio: 3 }}
            autoplay
            navigation
         >
            {info.images.map((image, index) => (
               <SwiperSlide key={index} zoom>
                  <div className="w-full h-full relative aspect-video">
                     <Image
                        src={image}
                        alt="Loading Image"
                        className="object-contain duration-200 ease-in-out transition-all"
                        placeholder="blur"
                        fill
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <h1 className="text-4xl md:text-5xl mt-10">{info.name}</h1>
         <div className="mt-5 mb-10">
            <div className="text-2xl text-neutral-700">Harga mulai dari</div>
            <div className="text-5xl md:text-6xl lg:text-7xl mb-4 font-thin">
               {info.price}
            </div>
         </div>
         <motion.div
            variants={ParentVariants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ margin: "20% 0px -20% 0px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-y-10 place-content-center mx-auto"
         >
            <UnitInfo
               title="Luas Tanah"
               content={metersquared(info.groundArea)}
            />
            <UnitInfo
               title="Luas Bangunan"
               content={metersquared(info.buildingArea)}
            />
            <UnitInfo title="Kamar Mandi" content={`${info.bathroom} unit`} />
            <UnitInfo title="Kamar Tidur" content={`${info.bedroom} unit`} />
         </motion.div>

         <LinkButton
            href={`https://wa.me/6282122771000?text=${info.whatsappMessage}`}
            className="my-10 text-3xl font-thin relative hover:scale-110 origin-left duration-150 hover:text-neutral-500"
         >
            Janji Survey <AiOutlineDoubleRight className="text-neutral-400" />
         </LinkButton>
      </div>
   );
}
