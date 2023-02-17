import React from "react";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import CardContent from "@/components/utils/CardContent";

const FeaturedAgencyCard = ({ agency }) => {
  console.log(agency);
  return (
    <Card className="w-[200px] bg-white">
      <CardImage className="w-[100px] h-[60px]">
        <Image src={agency?.image} />
      </CardImage>
      <CardContent className="max-w-[200px] text-center">
        <p className="text-gray-500">{agency?.name}</p>
        <p className="text-gray-400">{agency?.total}</p>
      </CardContent>
    </Card>
  );
};

export default FeaturedAgencyCard;
