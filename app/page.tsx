import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="flex flex-col items-center">
        <Image
          src="/MainBackImg.jpg"
          alt="메인 배경 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="object-contain"
        />
        <Navbar />
        <div className="flex flex-col text-white z-50 text-center font-semibold leading-snug mt-[50px]">
          <div className="text-[60px]">KOREAN FOOD</div>
          <div className="text-[100px]">WelCome JeomSim restaurant</div>
          <div className="text-[26px]">We supply highly quality korean Food</div>
        </div>
      </div>
    </main>
  );
}
