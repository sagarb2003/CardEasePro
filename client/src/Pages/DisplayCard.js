import React from "react";
import card from "../assets/creditcard.jpg";

const DisplayCard = () => {
  return (
    <div className="flex w-96 h-5/6 m-auto ml-80 border rounded-lg overflow-hidden shadow-lg">
      <img src={card} alt="none" className="w-full h-full object-cover" />
    </div>
  );
};

export default DisplayCard;
