import React from "react";

function History() {
  return (
    <div>
      <div className="lg:flex justify-between lg:[&>*]:px-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <img
            src="/icons/history-illustration.png"
            className="lg:h-4/6 mx-auto w-1/2 lg:w-fit object-cover"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 py-10 self-center">
          <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
            Our <span className="text-sky-800"> History</span>
          </h2>
          <p className="leading-[2rem]">
            Hotel Bordoisila, located near Sushrusa Hospital on National Highway
            31 in Nalbari, boasts a rich history rooted in providing a warm and
            welcoming retreat for travelers. From its inception, the hotel has
            been dedicated to offering genuine hospitality and creating a
            comfortable environment. Over time, Hotel Bordoisila has become
            synonymous with simplicity and a commitment to ensuring a memorable
            stay. The hotel's culinary offerings have especially stood out,
            making it a cherished destination for those seeking both comfort and
            delightful flavors in the heart of Nalbari.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
