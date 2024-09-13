"use client";

import Image from "next/image";
import personUmbrella from "../../public/utilities/personUmbrella.png";
import MyLocationContainer from "@/components/weather/myLocationContainer";
import SearchBar from "@/components/searchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center align-items p-24">
      <SearchBar />
      <Image
        src={personUmbrella}
        alt="Cloud with rain image"
        width={300}
        height={200}
      />
    </main>
  );
}
