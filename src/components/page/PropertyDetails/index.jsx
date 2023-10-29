import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import ImageScrollbar from "../../utils/ImageScrollBar.jsx";
import { baseUrl } from "@/apiCalls/constants.js";
const PropertyDetails = ({property}) => {

  console.log(property, "property")

 
  const photos = property?.images?.map(url => baseUrl+'/' + url);

  console.log(photos)
  
  return (
  <Box
    maxWidth="1000px"
    margin="auto"
    p="4"
    paddingTop={"6rem"}
    className="bg-gray-100">
    {photos && <ImageScrollbar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center">
        <Box paddingRight="3" color="green.400">
          {/* {isVerified && <GoVerified />} */}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          USD {property?.price} {property?.rentFrequency && `/${property?.rentFrequency}`}
        </Text>
        <Spacer />
        {/* <Avatar size="sm" src={agency?.logo?.url}></Avatar> */}
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400">
        {property?.room}
        <FaBed /> | {property?.bathroom} <FaBath /> | {millify(property?.area)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Box marginTop="2">
      <Text fontSize="lg" marginBottom="2" fontWeight="bold">
        {property?.name}
      </Text>
      <Text lineHeight="2" color="gray.600">
        {property?.description}
      </Text>
    </Box>
    <Flex
      flexWrap="wrap"
      textTransform="uppercase"
      // justifyContent="space-between"
      >
      <Flex
        justifyContent="space-between"
        // w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        gap={3}
        p="3"
        pl={0}
        >
        <Text>Type:</Text>
        <Text fontWeight="bold">{property?.category?.name || "Home"}</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        // w="400px"
        borderBottom="1px"
        borderColor="gray.100"
        p="3"
        gap={3}>
        <Text>Purpose:</Text>
        <Text fontWeight="bold">{property?.purpose?.slice(0,1)?.toUpperCase() + property?.purpose?.slice(1, property?.purpose?.length)}</Text>
      </Flex>
      {property?.furnishingStatus && (
        <Flex
          justifyContent="space-between"
          // w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3" 
          gap={3}>
          <Text className="text-sm" fontSize={"medium"}>
            Furnishing Status:
          </Text>
          <Text className="text-sm" fontWeight="semibold">
            {property?.furnishingStatus}
          </Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {property?.amenities?.length && (
        <Text fontSize="xl" fontWeight={"semibold"} marginTop="5">
          Facilites:
        </Text>
      )}
      <Flex flexWrap="wrap">
        {property?.amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text
              key={amenity?.text}
              color="blue.600"
              fontSize="l"
              p="2"
              bg="gray.200"
              m="1"
              borderRadius="5">
              {amenity}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
)};

export default PropertyDetails;
