import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { list } from "@/data/Data";
import PropertyCard from "./PropertyCard";
const PropertiesContainer = () => {
  const router = useRouter();
  return (
    <div>
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap" className="items-center justify-center gap-[1rem]">
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
          {/* <Image src={noresult} /> */}
          <Text fontSize="xl" marginTop="3">
            No Result Found.
          </Text>
        </Flex>
      )}
    </div>
  );
};

export default PropertiesContainer;
