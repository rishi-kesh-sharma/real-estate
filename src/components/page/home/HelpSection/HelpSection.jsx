import React from "react";
import Heading from "@/components/utils/Heading";
import {
  Avatar1,
  Avatar2,
  Avatar3,
} from "../../../../../public/assets/images/Avatars";
import CardContainer from "@/components/utils/CardContainer";
import HelpSectionCard from "./HelpSectionCard";
const data = [
  {
    image: Avatar1,
    title: "Buy a home",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Find a home",
  },
  {
    image: Avatar2,
    title: "Rent a home",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Rent a home",
  },
  {
    image: Avatar3,
    title: "See neighborhoods",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Learn more",
  },
];
const HelpSection = () => {
  return (
    <section className="bg-gray-100 mt-[2rem]">
      <div className="container my-[4rem] pt-[2rem]">
        <Heading title="See how Trulia can help" />
        <CardContainer className="gap-[0.5rem]">
          {data.map((item) => {
            return <HelpSectionCard item={item} />;
          })}
        </CardContainer>
      </div>
    </section>
  );
};

export default HelpSection;
