import React from "react";
import styled from "./index.module.css";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import CardContent from "@/components/utils/CardContent";

const CategoryTypeCard = ({ feature }) => {
  return (
    <Card className="w-[180px] h-[180px]  bg-white xs:w-[260px] xs:h-[200px] lg:">
      <CardImage className="h-[100px] w-[100px]">
        <Image src={feature.image} />
      </CardImage>
      <CardContent className="">
        <h4 className="text-gray-600">{feature.name}</h4>
        <label className="text-gray-400">{feature.total}</label>
      </CardContent>
    </Card>
  );
};

export default CategoryTypeCard;
