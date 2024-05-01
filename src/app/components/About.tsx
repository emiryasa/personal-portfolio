import Navbar from "./Navbar";
import PP from "@/public/file3.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

function Home() {
  const words =
    "I'm a passionate web developer based in Istanbul. I specialize in building exceptional wep apps.";
  return (
    <div className="md:container md:mx-auto space-y-10 lg:px-20">
      <Navbar />
      <div className="flex px-5 md:px-0 md:flex-row py-16 flex-col justify-center md:justify-between items-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Hi I&apos;m Emir
          </h1>
          <TextGenerateEffect
            words={words}
            className="font-normal text-lg text-neutral-300 max-w-lg"
          />
        </div>
        <Image
          className="rounded-full hidden md:block w-[120px] md:w-[350px]"
          src={PP}
          alt="profile_picture"
        />
      </div>
    </div>
  );
}

export default Home;
