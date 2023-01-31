import React from "react";
import Heading from "../common/Heading";
import styled from "./FeaturedAgencies.module.css";
import FeaturedAgencyCard from "./FeaturedAgencyCard";
import { agencies } from "../../data/Data";

const FeaturedAgencies = () => {
  return (
    <>
      <section className={`${styled.featured} featured background `}>
        <div className="container">
          <Heading
            title="Featured Agencies"
            subtitle="Find All Of Our Agencies."
          />
          <div className="my-[2rem] grid grid-cols-1 place-content-center place-items-center gap-[1.5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   md:my-[3rem]">
            {" "}
            {agencies.map((agency, index) => (
              <FeaturedAgencyCard agency={agency} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedAgencies;
