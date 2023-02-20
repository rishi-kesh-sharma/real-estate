import React from "react";
import Heading from "../../../utils/Heading";
import { list } from "../../../../data/Data";

import styled from "./index.module.css";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import CustomSlider from "../../../utils/CustomSlider";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import Slider from "./Slider";

const FeaturedProperties = () => {
  return (
    <Section
      className={`${styled.recent} ${styled.padding} mt-[3rem] bg-gray-50 py-[2rem] `}>
      <Container>
        <Heading
          title="Featured Properties"
          subtitle="look our featured properties"
        />
        <Slider />
      </Container>
    </Section>
  );
};

export default FeaturedProperties;
