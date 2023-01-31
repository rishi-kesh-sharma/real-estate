import React, { useState } from "react";
import styled from "./Recent.module.css";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const RecentCard = ({ recent }) => {
  const { cover, category, location, name, price, type } = recent;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="box shadow p-2">
        <div className="img rounded-lg">
          <img src={cover} className="rounded-lg" alt="" />
        </div>
        <div className={`${styled.text} text`}>
          <div
            className={`${styled.category} ${styled.flex} flex items-center justify-between category`}
          >
            <span
              style={{
                background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                color: category === "For Sale" ? "#25b579" : "#ff9800",
              }}
            >
              {category}
            </span>
            {isLiked ? (
              <FcLike onClick={handleLikeClick} />
            ) : (
              <FcLikePlaceholder onClick={handleLikeClick} />
            )}
          </div>
          <h4>{name}</h4>
          <p>{location}</p>
        </div>
        <div
          className={`${styled.button} ${styled.flex} button flex items-center justify-between`}
        >
          <div>
            <button className=" px-2 py-[0.2rem] text-center">{price}</button>{" "}
            <label htmlFor="" className="text-center">
              /sqft
            </label>
          </div>
          <span>{type}</span>
        </div>
      </div>
    </>
  );
};

export default RecentCard;
