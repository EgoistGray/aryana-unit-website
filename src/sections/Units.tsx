import Section from "@/components/Section";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Unit from "@/templates/unit";
import FamiliaImages from "@/images/famillia";
import IdolaImages from "@/images/idola";
import NusaImages from "@/images/nusa";
import SuryaImages from "@/images/surya";
import PrimaImages from "@/images/prima";

export default function Units() {
   return (
      <Section className="">
         <h1 className="text-center md:text-left text-4xl mb-10 font-semibold">
            Units
         </h1>
         <Unit
            name="Cluster Megah: Tipe Familia"
            images={FamiliaImages}
            price="Rp 1.000.000.000"
            groundArea={73}
            buildingArea={83}
            bathroom={4}
            bedroom={2}
            whatsappMessage="Helo saya ingin survey cluster megah tipe familia"
         />
         <Unit
            name="Cluster Megah: Tipe Idola"
            images={IdolaImages}
            price="Rp 1.000.000.000"
            groundArea={73}
            buildingArea={83}
            bathroom={4}
            bedroom={2}
            whatsappMessage="Helo saya ingin survey cluster megah tipe idola"
         />
         <Unit
            name="Cluster Nusa Amanda"
            images={NusaImages}
            price="Rp 840.000.000"
            groundArea={55}
            buildingArea={70}
            bathroom={3}
            bedroom={1}
            whatsappMessage="Helo saya ingin survey cluster nusa amanda"
         />
         <Unit
            name="Cluster Surya"
            images={SuryaImages}
            price="Rp 880.000.000"
            groundArea={72}
            buildingArea={51}
            bathroom={3}
            bedroom={1}
            whatsappMessage="Helo saya ingin survey cluster surya"
         />
         <Unit
            name="Cluster Prima Familia"
            images={PrimaImages}
            price="Rp 900.000.000"
            groundArea={72}
            buildingArea={83}
            bathroom={4}
            bedroom={2}
            whatsappMessage="Helo saya ingin survey cluster prima familia"
         />
      </Section>
   );
}
