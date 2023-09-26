import React from "react";
import Heading from "@/components/utils/Heading";
import CardContainer from "@/components/utils/CardContainer";
import HelpSectionCard from "./HelpSectionCard";
import { helpSectionData as data } from "@/data/Data";
const HelpSection = () => {
  return (
    <section className="bg-gray-100 mt-[2rem]">
      <div className="container my-[4rem] pt-[2rem]">
        <Heading title="See how Trulia can help" />
        <CardContainer className="gap-[0.5rem]">
          {data.map((item,index) => {
            return <HelpSectionCard item={item} key={index} />;
          })}
        </CardContainer>
      </div>
    </section>
  );
};

export default HelpSection;
