import { Variants, motion } from "framer-motion";
import { Autoplay, Navigation, Pagination, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { LinkButton } from "@/components/Buttons";
import { StaticImageData } from "next/image";
import { AiOutlineDoubleRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import BlurImage from "@/components/BlurImage";
import { metersquared } from "@/utils/decor";

const ParentVariants: Variants = {
   hidden: {},
   show: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};
const UnitVariants: Variants = {
   hidden: {
      opacity: 0,
      y: 10,
   },
   show: {
      opacity: 1,
      y: 0,
   },
};

function UnitInfo({
   title,
   content,
}: {
   title: React.ReactNode;
   content: React.ReactNode;
}) {
   return (
      <motion.div>
         <div className="w-full h-px my-4 rounded-full md:hidden bg-neutral-300"></div>
         <div className="mb-2 text-xl font-bold text-neutral-800">{title}</div>
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
            autoplay={{ delay: 5000 }}
            navigation
         >
            {info.images.map((image, index) => (
               <SwiperSlide key={`${image.src}${index}`} zoom>
                  <div className="relative w-full h-full aspect-video">
                     <BlurImage
                        src={image}
                        alt="Loading Image"
                        className="object-contain transition-all duration-200 ease-in-out"
                        placeholder="blur"
                        fill
                     />
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <h1 className="mt-10 text-4xl md:text-5xl">{info.name}</h1>
         <div className="mt-5 mb-10">
            <div className="text-2xl text-neutral-700">Harga mulai dari</div>
            <div className="mb-4 text-5xl font-thin md:text-6xl lg:text-7xl">
               {info.price}
            </div>
         </div>
         <motion.div
            variants={ParentVariants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ margin: "20% 0px -20% 0px" }}
            className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 md:gap-y-10 place-content-center"
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
            className="relative my-10 text-3xl font-thin duration-150 origin-left hover:scale-110 hover:text-neutral-500"
         >
            Janji Survey <AiOutlineDoubleRight className="text-neutral-400" />
         </LinkButton>
      </div>
   );
}
