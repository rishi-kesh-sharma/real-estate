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

const Properties = ({ properties }) => {
  const router = useRouter();

  return (
    <Box className="pt-[6rem] flex flex-col gap-[2rem] mb-[2rem]">
      <div className="flex items-start">
        <PropertesSideBar />
        <PropertiesContainer />
      </div>
    </Box>
  );
};

export default Properties;
