import Image from "next/image";
import SideBar from "@/components/SideBar";
import Sun2 from "../../public/images/Sun2.png";
import CloudwithRain from "../../public/images/CloudwithRain.png";
import Grid from "@/components/Grid";
import DescriptionContainer from "@/components/weather/descriptionContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center align-items p-24">
      <DescriptionContainer />
      <Image
        src={CloudwithRain}
        alt="Cloud with rain image"
        width={100}
        height={24}
      />
    </main>
  );
}
