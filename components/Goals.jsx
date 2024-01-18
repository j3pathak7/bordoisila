import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Goals() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="lg:flex lg:space-y-0 space-y-10">
      <div className=" px-10 space-y-5 text-center">
        <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
          Our <span className="text-sky-800"> Vision</span>
        </h2>
        <p className="leading-[2rem]">
          Hotel Bordoisila envisions a blend of sophistication and comfort,
          becoming Nalbari's premier destination where refined simplicity meets
          luxury, creating an inviting haven for discerning guests.
        </p>
      </div>
      <div className=" px-10 lg:border-l-2 text-center space-y-5">
        <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
          Our <span className="text-sky-800"> Mission</span>
        </h2>
        <p className="leading-[2rem]">
          Our mission is to craft transformative experiences, ensuring every
          guest feels cherished. Through dedicated hospitality and culinary
          artistry, we aim to set a new standard of excellence, redefining
          refined simplicity in Nalbari.
        </p>
      </div>
    </div>
  );
}

export default Goals;
