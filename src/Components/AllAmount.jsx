import React from "react";

const AllAmount = ({ ele }) => {
  return (
    <div className="flex flex-row h-12 w-full shadow-lg mt-4 divide-x-4">
      <div className="w-9/12">
        <h1 className="text-black font-medium text-lg px-3">{ele.heading}</h1>
      </div>
      <div
        className={ele.amount >= 0 ? "w-1/4 bg-green-600" : "w-1/4 bg-red-600"}
      >
        <h1 className="text-black font-medium text-center text-lg px-3">
          ₹{+ele.amount}
        </h1>
      </div>
    </div>
  );
};

export default AllAmount;
