import React from "react";
import PropertyCard from "./PropertyCard";
import { useState } from "react";
import { useRouter } from "next/router";
import SearchFilters from "./PropertiesSideBar";

import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import PropertiesContainer from "./PropertiesContainer";
import PropertesSideBar from "./PropertiesSideBar";
import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";

const Properties = ({ properties }) => {
  const router = useRouter();

  return (
    <Section className="pt-[1rem] flex flex-col gap-[2rem] mb-[2rem]">
      <Container className="flex items-start flex-col ">
        <PropertesSideBar />
        <PropertiesContainer />
      </Container>
    </Section>
  );
};

export default Properties;
