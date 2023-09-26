import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { list } from "@/data/Data";
import PropertyCard from "../../Properties/PropertyCard";

const MyPropertiesContainer = () => {
  const router = useRouter();
  return (
    <div className="w-2/3">
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        className="text-[1.6rem] mb-[2rem]">
        My Properties
      </Text>
      <Flex flexWrap="wrap" className="items-center justify-start gap-[1rem]">
        {list.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </Flex>
      {list.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="5"
          marginBottom="5">
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default MyPropertiesContainer;
