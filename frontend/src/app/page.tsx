import Image from "next/image";
import personUmbrella from "../../public/utilities/personUmbrella.png";
import DescriptionContainer from "@/components/weather/descriptionContainer";
import MyLocationContainer from "@/components/weather/myLocationContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center align-items p-24">
      <DescriptionContainer />
      <hr />
      <Image
        src={personUmbrella}
        alt="Cloud with rain image"
        width={300}
        height={200}
      />
    </main>
  );
}
