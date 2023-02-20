import React from "react";
import Heading from "../../../utils/Heading";
import { list } from "../../../../data/Data";

import styled from "./index.module.css";
import RecentCard from "./RecentCard";
import CardContainer from "@/components/utils/CardContainer";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";

const Recent = () => {
  return (
    <Section className={`${styled.recent} bg-gray-100 my-[2rem] py-[2rem]`}>
      <Container>
        <Heading
          title="Recently Listed Properties"
          subtitle="see our recently listed properties"
        />
        <CardContainer className="flex flex-wrap items-center justify-center gap-[2rem] mt-[2rem] md:mt-[3rem] ">
          {list.map((recent, index) => {
            return <RecentCard recent={recent} key={index} />;
          })}
        </CardContainer>
      </Container>
    </Section>
  );
};

export default Recent;
