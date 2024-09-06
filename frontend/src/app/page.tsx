import Image from "next/image";
import personUmbrella from "../../public/utilities/personUmbrella.png";
import DescriptionContainer from "@/components/weather/descriptionContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center align-items p-24">
      <DescriptionContainer />
      <Image
        src={personUmbrella}
        alt="Cloud with rain image"
        width={300}
        height={200}
      />
    </main>
  );
}
