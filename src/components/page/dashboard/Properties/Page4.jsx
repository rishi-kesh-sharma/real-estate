import { Checkbox, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Page4 = ({ register, errors }) => {
  return (
    <>
      <Heading>Appliances</Heading>
      <Stack
        spacing={4}
        direction={["column", "row"]}
        className="flex flex-wrap gap-[1rem]">
        <Checkbox
          className="outline  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          name="cooling"
          {...register("cooling")}>
          Cooling
        </Checkbox>
        <Checkbox
          className="outline  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          name="heating"
          {...register("heating")}>
          Heating
        </Checkbox>
        <Checkbox
          className="outline  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          name="internet"
          {...register("internet")}>
          Internet
        </Checkbox>
        <Checkbox
          className="outline  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          name="furniture"
          {...register("furniture")}>
          Furniture
        </Checkbox>
        <Checkbox
          className="outline  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          name="parking"
          {...register("parking")}>
          Parking
        </Checkbox>
      </Stack>
    </>
  );
};

export default Page4;
