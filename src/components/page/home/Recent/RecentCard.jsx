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
    <Link href={`property/${recent.id}`} className="w-[100%]">
      <Card className="bg-white shadow p-[0.4rem] items-start w-[100%] ">
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
          <div className="flex flex-col gap-[0.1rem] xs:flex-row xs:justify-between">
            <div className="flex items-center">
              <p className="py-[0.1rem] text-center font-semibold">
                {price}
              </p>
              <p htmlFor="" className="text-center text-gray-400">
                /sqft
              </p>
            </div>
            <span className="text-sm text-gray-400">{type}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecentCard;
