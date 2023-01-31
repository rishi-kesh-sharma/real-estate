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
          <div className="my-[1rem] flex flex-wrap gap-[2rem] items-center justify-center">
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
