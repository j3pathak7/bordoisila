import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import React from "react";

function Terms() {
  return (
    <>
      <NavBar />
      <div className="[&>*]:py-6 px-5 md:px-10 lg:px-20 xl:px-36">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Terms Of Service</h2>
        </div>
        <p className="text-lg">
          By making a reservation and staying at Hotel Bordoisila, guests agree
          to abide by these terms and conditions. Hotel Bordoisila reserves the
          right to modify these terms and conditions without prior notice.
        </p>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Booking Policy</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>All reservations are subject to availability.</li>
            <li>
              Guests must provide valid identification and a credit card at the
              time of check-in.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">
            Cancellation Policy
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Cancellation deadlines and fees vary based on the room type and
              rate selected.
            </li>
            <li>
              Guests are advised to review specific cancellation policies at the
              time of booking.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Check-in/Check-out</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Check-in time is from 2:00 PM onwards, and check-out time is until
              12:00 PM.
            </li>
            <li>
              Early check-in and late check-out are subject to availability and
              may incur additional charges.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Payment</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Payment for the entire stay is required at the time of check-in.
            </li>
            <li>
              We accept major credit cards; cash payments may be subject to
              additional conditions.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Damages and Losses</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Guests are responsible for any damages or losses incurred during
              their stay.
            </li>
            <li>
              Any missing or damaged items will be charged to the guest's
              account.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Guest Conduct</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Guests are expected to conduct themselves in a respectful manner
              towards staff and fellow guests.
            </li>
            <li>
              Any disruptive or inappropriate behavior may result in eviction
              without a refund.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Smoking Policy</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Hotel Bordoisila is a non-smoking property. Smoking is prohibited
              in all indoor areas.
            </li>
            <li>
              Designated smoking areas are available; violations may result in
              fines.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Pets</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Pets are not allowed unless prior arrangements have been made with
              the hotel.
            </li>
            <li>
              Additional charges and conditions may apply for pet-friendly
              accommodations.
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg lg:text-xl font-medium">Privacy Policy</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Guest information is kept confidential and is only used for
              reservation and communication purposes.
            </li>
            <li>
              Credit card information is securely handled in accordance with
              industry standards.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
