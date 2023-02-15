import React from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import FeaturedAgencyCard from "./FeaturedAgencyCard";
import { agencies } from "../../../../data/Data";
import CardContainer from "@/components/utils/CardContainer";

const FeaturedAgencies = () => {
  return (
    <>
      <section
        className={`${styled.featured} featured bg-gray-50 py-[2rem] my-[1rem] `}
      >
        <div className="container">
          <Heading
            title="Featured Agencies"
            subtitle="Find All Of Our Agencies."
          />
          <CardContainer className="my-[2rem] grid grid-cols-1 place-content-center place-items-center gap-[1.5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   md:my-[3rem]">
            {" "}
            {agencies.map((agency, index) => (
              <FeaturedAgencyCard agency={agency} key={index} />
            ))}
          </CardContainer>
        </div>
      </section>
    </>
  );
};

export default FeaturedAgencies;
