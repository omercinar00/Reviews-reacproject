import React, { useState } from "react";
import CardStyle from "./card.module.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Card = ({ data }) => {
  //? let sayac = 1
  const [index, setIndex] = useState(0);

  const { name, id, text, image, job } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const right = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const left = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  // ************

 const surprise = () => {
   let x = Math.round(Math.random() * data.length);
   if (x === index) {
     x = index + 1;
   }
   setIndex(checkNumber(x));
 };
  return (
    <div className="main">
      <div className={CardStyle.card} key={id}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h3>{job}</h3>
        <p>{text}</p>
        <span>
          <FaChevronLeft className={CardStyle.left} onClick={left} />
          <button onClick={surprise}>Surprise me</button>
          <FaChevronRight className={CardStyle.right} onClick={right} />
        </span>
      </div>
    </div>
  );
};

export default Card;
