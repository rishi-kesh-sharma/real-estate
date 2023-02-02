import React from "react";
import PropertyCard from "./PropertyCard";
import { useState } from "react";
import { useRouter } from "next/router";
import SearchFilters from "../../utils/SearchFilters";

import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const Properties = ({ properties }) => {
  const router = useRouter();

  const [searchFilters, setSearchFilters] = useState(false);

  return (
    <Box className="pt-[6rem] flex flex-col gap-[2rem] mb-[2rem]">
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        className="bg-gray-200 py-[1rem] ">
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap" className="items-center justify-center gap-[1rem]">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5">
          <Image src={noresult} />
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Properties;
