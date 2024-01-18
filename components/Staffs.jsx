import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slideshow from "./Slideshow";

function Staffs() {
  let arr = ["staffs1", "staffs2", "barman", "chef", "barman-mixing"];
  const [currentImage, setcurrentImage] = useState(null);
  useEffect(() => {
    const stopSlideshow = Slideshow(arr, (value) => {
      try {
        // Handle the value at each interval here
        setcurrentImage(value);
      } catch (error) {
        console.error("Error in callback:", error);
      }
    });

    return () => {
      stopSlideshow();
    };
  }, []);

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between  lg:[&>*]:px-10">
        <div className="lg:w-1/2 order-2 lg:order-1 space-y-5 py-10 self-center">
          <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
            The<span className="text-sky-800"> Staffs</span>
          </h2>
          <p className="leading-[2rem]">
            our staff is the heartbeat of our hospitality. Comprising a team of
            dedicated professionals, each member is committed to ensuring that
            every guest experience is marked by warmth, efficiency, and genuine
            care. From the reception desk to the culinary artisans in our
            kitchen, every staff member plays a crucial role in creating an
            environment that feels like a home away from home. Trained to
            anticipate and exceed expectations, our staff takes pride in
            delivering exceptional service, making each visitor feel not just
            welcomed but truly valued.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center lg:w-1/2">
          <Image
            src={`/images/${currentImage}.jpg`}
            className="rounded-lg"
            width={500}
            height={500}
            alt="Picture of the staff"
          />
        </div>
      </div>
    </div>
  );
}

export default Staffs;
