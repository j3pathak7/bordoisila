import React from "react";
import Goals from "./Goals";

function AboutIntroduction() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between lg:[&>*]:px-10">
        <div className="lg:w-1/2 space-y-5 py-10 self-center">
          <h2 className="text-sky-800 text-2xl lg:text-3xl font-semibold">
            Introduction
          </h2>
          <p className="leading-[2rem]">
            Discover Hotel Bordoisila on National Highway 31, near Sushrusa
            Hospital in Nalbari. While not opulent, our hotel offers a welcoming
            retreat. Experience genuine hospitality, simple comforts, and relish
            in delightful cuisine during your stay. At Hotel Bordoisila, we
            prioritize a warm atmosphere and excellent food for a memorable
            visit. Welcome to your home away from home.
          </p>
        </div>
        <div className="hidden lg:flex flex-col justify-center w-1/2 py-16">
          <img src="/icons/about-illustration.png" />
        </div>
      </div>
      <Goals />
    </div>
  );
}

export default AboutIntroduction;
