import React from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";
import AlertPop from "@/components/utils/FormAlert";

const Page2 = ({
  register,
  errors,
  facingOptions,
  PropertyAreaTabs,
  areaUnitsOptions,
  roadTypesOptions,
  tabItems,
  numericPattern,
}) => {
  return (
    <>
      <Heading>Property Highlights</Heading>
      <div className="flex flex-wrap gap-[1rem]">
        {/* <FormControl>
      <FormLabel>Property Area</FormLabel>
      <Select
        className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
        variant="filled"
        placeholder="Select Property Area"
        name="area"
        {...register("area", {
          required: "Select a area",
        })}>
     
        {areaUnitsOptions.map((area) => (
          <option key={area.key} value={area.value}>
            {area.text}
          </option>
        ))}
      </Select>
      {errors.category && (
        <AlertPop title={errors.category.message} />
      )}
    </FormControl> */}

        <PropertyAreaTabs
          tabBtns={areaUnitsOptions}
          // tabBtns={tabBtns}
          tabItems={tabItems}
        />
        <FormControl>
          <FormLabel>Facing</FormLabel>
          <Select
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="filled"
            placeholder="Select a Facing"
            name="facing"
            {...register("facing", {
              required: "Select a facing",
            })}>
            {facingOptions.map((facing) => (
              <option key={facing.key} value={facing.value}>
                {facing.text}
              </option>
            ))}
          </Select>
          {errors.facing && <AlertPop title={errors.facing.message} />}
        </FormControl>
        <FormControl>
          <FormLabel>Road Type</FormLabel>
          <Select
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="filled"
            placeholder="Select Road Type"
            name="road_type"
            {...register("road_type", {
              required: "Select  Road Type",
            })}>
            {roadTypesOptions.map((road_type) => (
              <option key={road_type.key} value={road_type.value}>
                {road_type.text}
              </option>
            ))}
          </Select>
          {errors.road_type && <AlertPop title={errors.road_type.message} />}
        </FormControl>

        <FormControl>
          <FormLabel>Bedrooms</FormLabel>
          <NumberInput
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="flushed"
            name="bedrooms"
            min={0}>
            <NumberInputField
              // className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
              {...register("bedrooms", {
                required: "Specify the number of bedrooms",
                valueAsNumber: true,
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {errors.bedrooms && <AlertPop title={errors.bedrooms.message} />}
        </FormControl>
        <FormControl>
          <FormLabel>Baths</FormLabel>
          <NumberInput
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="flushed"
            name="baths"
            min={0}>
            <NumberInputField
              {...register("baths", {
                required: "Specify the number of bathrooms",
                valueAsNumber: true,
              })}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {errors.baths && <AlertPop title={errors.baths.message} />}
        </FormControl>
        <FormControl>
          <FormLabel>Surface Area(sqft)</FormLabel>
          <InputGroup>
            <Input
              className="outline w-fullmax-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
              type="number"
              variant="flushed"
              name="surface_area"
              {...register("surface_area", {
                required: "Enter the surface area of the property",
                min: {
                  value: 2,
                  message: "Small surface area or invalid",
                },
                pattern: {
                  value: numericPattern,
                  message: "Invalid surface area data format",
                },
                valueAsNumber: true,
              })}
            />
          </InputGroup>
          {errors.surface_area && (
            <AlertPop title={errors.surface_area.message} />
          )}
        </FormControl>
      </div>
    </>
  );
};

export default Page2;
