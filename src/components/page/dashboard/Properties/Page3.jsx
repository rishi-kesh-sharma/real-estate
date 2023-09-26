import { Checkbox, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import React from "react";

const Page3 = ({ register, errors, featuresOptions }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Features And Amenities</FormLabel>
        <Stack
          spacing={4}
          direction={["column", "row"]}
          className="flex flex-wrap gap-[0.4rem]">
          {featuresOptions.map((featureOption, index) => {
            return (
              <Checkbox
                key={index}
                className="outline  outline-gray-200 rounded-md outline-1 px-[0.8rem] py-[0.4rem]"
                name={`${featureOption?.flag}`}
                {...register(`${featureOption?.flag}`)}>
                {featureOption?.flag}
              </Checkbox>
            );
          })}
        </Stack>
      </FormControl>
    </>
  );
};

export default Page3;
