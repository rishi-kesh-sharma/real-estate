import React, { useState } from "react";
import styled from "./FeaturedProperties.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const FeaturedPropertyCard = ({ featured }) => {
  const { cover, category, location, name, price, type } = featured;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="box shadow p-2 flex flex-col gap-2 ">
        <div className="img rounded-lg">
          <img src={cover} className="rounded-lg max-w-[400px]" alt="" />
        </div>
        <div className={`${styled.text} text mt-[0.8rem]  `}>
          <div
            className={`${styled.category} ${styled.flex} flex  items-center justify-between category`}
          >
            <span
              className="mt-0 text-sm"
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
          <h4 className="text-sm">{name}</h4>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
        <div
          className={`${styled.button} ${styled.flex} button flex items-center justify-between`}
        >
          <div>
            <button className=" px-2 py-[0.2rem] text-center font-light">
              {price}
            </button>{" "}
            <label htmlFor="" className="text-center text-gray-400">
              /sqft
            </label>
          </div>
          <span className="text-sm text-gray-400">{type}</span>
        </div>
      </div>
    </>
  );
};

export default FeaturedPropertyCard;
