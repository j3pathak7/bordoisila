import React from "react";
import Link from "next/link";
import { Italianno } from "@next/font/google";
import { AiOutlineDoubleRight } from "react-icons/ai";
const italianno = Italianno({ weight: "400", subsets: ["latin"] });
function Home() {
  const angle = <AiOutlineDoubleRight className="self-center" />;
  return (
    <div className="bg-cover bg-opacity-40">
      <div className="text-center py-10 md:py-20 lg:py-32 px-4 space-y-4 ">
        <h1 className={`text-4xl xl:text-6xl leading-[3.5rem] font-semibold`}>
          Find cozy comfort at Hotel
          <span className="text-sky-800 "> Bordoichilla</span>
        </h1>
        <p className="xl:text-lg font-light mx-auto lg:px-4 px-2">
          Indulge in the epitome of sophistication and relaxation at our
          exquisite hotel.
        </p>
        <div className="flex justify-center">
          <Link href="/about">
            <button className="self-center btn">Explore {angle}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
