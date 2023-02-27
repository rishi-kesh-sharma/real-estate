import React from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import FeaturedAgencyCard from "./FeaturedAgencyCard";
import { agencies } from "../../../../data/Data";
import CardContainer from "@/components/utils/CardContainer";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";

const FeaturedAgencies = () => {
  return (
    <Section
      className={`${styled.featured} featured bg-gray-50 py-[2rem] my-[1rem] `}>
      <Container>
        <Heading
          title="Featured Agencies"
          subtitle="Find All Of Our Agencies."
        />
        <CardContainer className="my-[2rem] grid grid-cols-1 place-content-center place-items-center gap-[1.5rem] sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  md:my-[3rem]">
          {" "}
          {agencies.map((agency, index) => (
            <FeaturedAgencyCard agency={agency} key={index} />
          ))}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default FeaturedAgencies;
