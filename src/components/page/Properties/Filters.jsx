import {
  Flex,
  SliderThumb,
  SliderTrack,
  Text,
  Icon,
  Slider,
  SliderFilledTrack,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
const categories = ["male", "female"];

const Filters = ({}) => {
  const priceRef = useRef(null);
  const [showfilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [filters] = useState(filterData);
  const [price, setPrice] = useState([0, 200000]);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [ratingsToggle, setRatingsToggle] = useState(false);
  const [category, setCategory] = useState(false);
  const router = useRouter();
  const priceHandler = (e) => {
    // setPrice([0, Number(e.target.value)]);
    setPrice([0, Number(priceRef.current.value)]);
  };
  return (
    <div>
      <Flex className="gap-[1rem]">
        <Flex
          onClick={() => setShowFilters(!showfilters)}
          cursor="pointer"
          bg="gray.100"
          borderBottom="1px"
          borderColor="gray.200"
          fontWeight="black"
          fontSize="lg"
          justifyContent="center"
          alignItems="center"
          className="bg-gray-200 py-[1rem] px-[0.5rem] gap-[0.1rem] rounded-md  ">
          <Text className="text-[0.9rem] text-gray-600">
            Search Property By Filters
          </Text>
          <Icon as={BsFilter} />
        </Flex>
        <Flex className=" bg-white shadow items-center px-[0.3rem] rounded-md text-gray-500">
          Clear All
        </Flex>
      </Flex>
      {showfilters && (
        <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
          {/* price slider filter */}
          <div className="flex flex-col gap-2 border-b px-4">
            <span className="font-medium text-xs">PRICE</span>
            {/* <Slider
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider> */}

            {/* <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              getAriaLabel={() => "Price range slider"}
              min={0}
              max={200000}
              className="bg-red-700"
            /> */}
            <input
              type="range"
              name="range"
              id=""
              // min={price[0]}
              // max={price[1]}
              onChange={priceHandler}
              ref={priceRef}
            />

            <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
              <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                ₹{price[0].toLocaleString()}
              </span>
              <span className="font-medium text-gray-400">to</span>
              <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                ₹{price[1].toLocaleString()}
              </span>
            </div>
          </div>
          {/* price slider filter */}

          {/* category filter */}
          <div className="flex flex-col border-b px-4">
            <div
              className="flex justify-between cursor-pointer py-2 pb-4 items-center"
              onClick={() => setCategoryToggle(!categoryToggle)}>
              <p className="font-medium text-xs uppercase">Category</p>
              {categoryToggle ? (
                <MdExpandLess sx={{ fontSize: "20px" }} />
              ) : (
                <MdExpandMore sx={{ fontSize: "20px" }} />
              )}
            </div>

            {categoryToggle && (
              <div className="flex flex-col pb-1">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="category-radio-buttons-group"
                    onChange={(e) => setCategory(e.target.value)}
                    name="category-radio-buttons"
                    value={category}>
                    {categories.map((el, i) => (
                      <FormLabel
                        value={el}
                        control={<Radio size="small" />}
                        label={
                          <span className="text-sm" key={i}>
                            {el}
                          </span>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            )}
          </div>
          {/* category filter */}

          {/* ratings filter */}
          <div className="flex flex-col border-b px-4">
            <div
              className="flex justify-between cursor-pointer py-2 pb-4 items-center"
              onClick={() => setRatingsToggle(!ratingsToggle)}>
              <p className="font-medium text-xs uppercase">ratings</p>
              {ratingsToggle ? (
                <MdExpandLess sx={{ fontSize: "20px" }} />
              ) : (
                <MdExpandMore sx={{ fontSize: "20px" }} />
              )}
            </div>

            {ratingsToggle && (
              <div className="flex flex-col pb-1">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="ratings-radio-buttons-group"
                    onChange={(e) => setRatings(e.target.value)}
                    value={ratings}
                    name="ratings-radio-buttons">
                    {[4, 3, 2, 1].map((el, i) => (
                      <FormLabel
                        value={el}
                        key={i}
                        control={<Radio size="small" />}
                        label={
                          <span className="flex items-center text-sm">
                            {el}
                            <FaStar sx={{ fontSize: "12px", mr: 0.5 }} /> &
                            above
                          </span>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            )}
          </div>
          {/* ratings filter */}
        </div>
      )}
    </div>
    // </div>
  );
};

export default Filters;
