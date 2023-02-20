import React from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Slider from "./Slider";

const CategoryTypes = () => {
  return (
    <Section
      className={`${styled.featured} featured my-[2rem] bg-gray-100 py-[2rem] `}>
      <Container className="container">
        <Heading
          title="Popular Categories"
          subtitle="Find All Type of Property."
        />
        <Slider />
      </Container>
    </Section>
  );
};

export default CategoryTypes;
