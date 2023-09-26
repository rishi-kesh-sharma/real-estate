import React, { useState } from "react";
import styled from "./index.module.css";
import Image from "next/image";

import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import Link from "next/link";

const RecentCard = ({ recent }) => {
  const { image, category, location, name, price, type } = recent;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <Link href={`property/${recent.id}`}>
      <Card className="bg-white shadow p-1rem] items-start w-[300px] xs:w-[350px] md:w-[320px]">
        <CardImage className="rounded-md">
          <Image src={image} className="rounded-lg object-cover" />
        </CardImage>
        <CardContent className="w-[100%]">
          <div className={`flex items-center justify-between`}>
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
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <button className=" px-2 py-[0.2rem] text-center">{price}</button>{" "}
              <label htmlFor="" className="text-center text-gray-400">
                /sqft
              </label>
            </div>
            <span className="text-sm text-gray-600">{type}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecentCard;
