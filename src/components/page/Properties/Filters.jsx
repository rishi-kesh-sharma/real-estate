import React from "react";

const Filters = () => {
    
  return (
    <div>
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
          className="bg-gray-200 py-[1rem] ">
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>{" "}
        {showfilters && (
          <div className="flex flex-col gap-2 py-3 text-sm overflow-hidden">
            {/* price slider filter */}
            <div className="flex flex-col gap-2 border-b px-4">
              <span className="font-medium text-xs">PRICE</span>
              <Slider
                aria-label="slider-ex-2"
                colorScheme="pink"
                defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>

              {/* <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  getAriaLabel={() => "Price range slider"}
                  min={0}
                  max={200000}
                /> */}

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
    </div>
  );
};

export default Filters;
