import React, { useState } from "react";
import styled from "./index.module.css";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const RecentCard = ({ recent }) => {
  const { cover, category, location, name, price, type } = recent;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="box shadow p-2 flex flex-col gap-[0.5rem]">
        <div className="img rounded-lg max-w-[300px]">
          <img src={cover} className="rounded-lg object-contain" alt="" />
        </div>
        <div className={`${styled.text} text flex flex-col gap-0 `}>
          <div
            className={`${styled.category}  flex items-center justify-between category`}>
            <span
              className="text-sm p-1"
              style={{
                background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                color: category === "For Sale" ? "#25b579" : "#ff9800",
              }}>
              {category}
            </span>
            {isLiked ? (
              <FcLike onClick={handleLikeClick} />
            ) : (
              <FcLikePlaceholder onClick={handleLikeClick} />
            )}
          </div>
          <h4 className="text-gray-600">{name}</h4>
          <p className="text-gray-400 text-sm">{location}</p>
        </div>
        <div
          className={`${styled.button} ${styled.flex}  flex items-center justify-between`}>
          <div>
            <button className=" px-2 py-[0.2rem] text-center">{price}</button>{" "}
            <label htmlFor="" className="text-center text-gray-400">
              /sqft
            </label>
          </div>
          <span className="text-sm text-gray-600">{type}</span>
        </div>
      </div>
    </>
  );
};

export default RecentCard;
