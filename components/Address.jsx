import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
function Address() {
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const web = <FontAwesomeIcon icon={faGlobe} />;
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-20">
        <iframe
          className="w-full h-96"
          title="map"
          // src="https://www.google.com/maps/embed/v1/place?q=The+Esquire+Resort+Limited,+Okunola+Crescent+Road,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.9018302993272!2d91.42888817554477!3d26.458893179445816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375bcc629ad9ec55%3A0x3ce917bec6ff6700!2sHotel%20Bordoichila!5e0!3m2!1sen!2sin!4v1705602020931!5m2!1sen!2sin"
        ></iframe>

        <div>
          <h1 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
            <span className="text-sky-800">Where</span> to{" "}
            <span className="text-sky-800"> Find</span> Us
          </h1>
          <div className=" mx-auto py-10 px-5 my-10 shadow-2xl shadow-slate-700 justify-center space-y-5">
            <div className="flex gap-4 ">
              <FaPhoneAlt className="self-center text-sky-800" />
              <span>8403851199</span>
            </div>
            <div className="flex gap-4 ">
              <FaMapMarker className="self-center text-sky-800" />
              <span>National Highway 31, near Sushrusa Hospital</span>
            </div>
            <div className="flex gap-4 ">
              <AiFillMail className="self-center text-sky-800" />
              <span>bordoisilahotel@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;
