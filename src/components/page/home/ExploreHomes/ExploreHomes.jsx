import React from "react";
import Heading from "@/components/utils/Heading";
import Slider from "./Slider";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
const ExploreHomes = () => {
  return (
    <Section>
      <Container>
        <Heading
          title={"Explore homes"}
          subtitle={
            "Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you."
          }
        />
        <Slider />
      </Container>
    </Section>
  );
};

export default ExploreHomes;
