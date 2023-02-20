import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel, MdExpandLess, MdExpandMore } from "react-icons/md";
import Image from "next/image";

import { filterData } from "../../../data/Data";
import { getFilterValues } from "../../../utils/filter";
import { baseUrl, fetchApi } from "../../../utils/fetchApi";
import { p1 as defaultPropertyImage } from "../../../../public/assets/images/properties";
import { FaStar } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import Filters from "./Filters";

// FUNCTIONAL COMPONENT
export default function PropertesSideBar() {
  const [showfilters, setShowFilters] = useState(false);
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 200000]);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [ratingsToggle, setRatingsToggle] = useState(false);
  const [category, setCategory] = useState(false);
  const router = useRouter();

  return (
    <Flex
      bg="gray.100"
      justifyContent=""
      flexWrap="wrap"
      className="py-[1rem]  gap-[1.5rem] justify-start">
      {/* CLEAR ALL OPTION */}
      <div className="flex flex-col bg-white rounded-sm shadow">
        <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
          <p className="text-lg font-medium">Filters</p>
          <span
            className="uppercase text-primary-blue text-xs cursor-pointer font-medium"
            onClick={() => clearFilters()}>
            clear all
          </span>
        </div>
      </div>

      {/* FILTERS */}
      <Filters />
      {/* {filters?.map((filter) => (
          <Box
            key={filter.queryName}
            className="border max-w-[200px] rounded-sm px-2 py-1">
            <Select
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
              placeholder={filter.placeholder}
              w="100%"
              p="2">
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))} */}
      <Flex flexDir="column" className="gap-[0.4rem]">
        <Button
          onClick={() => setShowLocations(!showLocations)}
          border="1px"
          borderColor="gray.200"
          marginTop="2"
          className="border border-solid  border-gray-600 text-gray bg-green-700">
          Search Location
        </Button>
        {showLocations && (
          <Flex
            flexDir="column"
            pos="relative"
            paddingTop="2"
            className="gap-[0.4rem]">
            <Input
              placeholder="Type Here"
              value={searchTerm}
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 border-solid p-[0.5rem] text-lg"
            />
            {searchTerm !== "" && (
              <Icon
                as={MdCancel}
                pos="absolute"
                cursor="pointer"
                right="5"
                top="15"
                zIndex="100"
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <Spinner margin="auto" marginTop="3" />}
            {showLocations && (
              <Box height="300px" overflow="auto" className="border px-2">
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}>
                    <Text
                      cursor="pointer"
                      bg="gray.200"
                      p="2"
                      borderBottom="1px"
                      borderColor="gray.100">
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    marginTop="5"
                    marginBottom="5">
                    {/* <Image src={noresult} /> */}
                    <Text fontSize="xl" marginTop="3">
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}