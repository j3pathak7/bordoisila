import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from "@next/font/google";
const poppins = Poppins({ weight: "500", subsets: ["devanagari"] });

function NotFound() {
  return (
    <div className={`bg-[#075985] ${poppins.className}`}>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Esquire Resorts 404 page " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar
        firstnav={"Home"}
        firstlink={"/"}
        secondnav={"Our Rooms"}
        secondlink={"/rooms"}
        thirdnav={"Help"}
        thirdlink={"/help"}
        fourthnav="Contact"
        fourthlink="/contact"
      />
      <div className="h-screen relative">
        <div className="flex justify-between text-white mx-auto lg:w-10/12 w-11/12 text-center m-20 mb-5">
          <div>
            <iframe
              allowfullscreen
              frameborder="0"
              height="270"
              src="https://giphy.com/embed/mPytjcsG3XS4o"
              width="480"
            ></iframe>
          </div>
          <div className="md:w-1/2  z-[5] flex flex-col justify-center space-y-8">
            <h1 className="text-5xl font-semibold font-mono leading-[56px]">
              Are you lost?
            </h1>
            <p className="my-2 text-md text-center">
              Whoops! It seems like you've reached an uncharted zone in our
              digital hotel. The page you're looking for is taking a brief
              vacation. Our team is on the case to bring it back. While we sort
              this out, feel free to explore other areas of our virtual space.
              If you need immediate assistance, contact our concierge. We
              appreciate your patience and look forward to welcoming you back
              soon!
            </p>
            <div className="flex justify-center space-x-10 ">
              <Link
                href="/"
                className="hover:bg-inherit self-center text-sky-500 bg-white p-4 px-10 rounded-2xl text-xl lg:text-2xl text-sky-800 font-semibold hover:border-2 hover:text-white"
              >
                Back to Homepage
              </Link>
              {/* <Link href="/" className='hover:bg-inherit self-center text-purple-500 bg-white p-4 rounded-2xl text-xl lg:text-2xl text-white font-semibold  hover:border-2 hover:text-white'>Back to Homepage</Link> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
