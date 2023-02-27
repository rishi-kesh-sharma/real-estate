import React, { useEffect } from "react";
import Head from "next/head";
const error = `


`;
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  AlertIcon,
} from "@chakra-ui/react";

import { useState, createRef } from "react";
// import Navbar from "@/components/layout/navbar";
import AlertPop from "@/components/utils/FormAlert";

// import { categoryOptions } from "@/assets/categories";
// import
// import UploadImage from "@/lib/firebase/estate/uploadImage";

const Page0 = ({ register, errors, propertyCategoriesOptions }) => {
  return (
    <>
      <Heading className="text-[1.5rem]">Property Overview</Heading>
      <FormControl>
        <FormLabel className="text-gray-600 text-[1rem]">Title</FormLabel>
        <Input
          className="outline w-full max-w-[400px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          variant="flushed"
          placeholder="ex: Modern Apartment Downtown..."
          name="title"
          {...register("title", {
            required: "Please enter a title",
            minLength: {
              value: 8,
              message: "Title is too short",
            },
          })}
        />
        {errors.title && <AlertPop title={errors.title.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>For</FormLabel>
        <Select
          className="outline w-full max-w-[400px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          variant="filled"
          placeholder="Select Purpose"
          name="purpose"
          {...register("purpose", {
            required: "Select Purpose",
          })}>
          {[
            {
              key: "rent",
              text: "Rent",
              value: "rent",
              flag: "rent",
            },
            {
              key: "Sale",
              text: "Sale",
              value: "Sale",
              flag: "Sale",
            },
          ].map((purpose) => (
            <option key={purpose.key} value={purpose.value}>
              {purpose.text}
            </option>
          ))}
        </Select>
        {errors.purpose && <AlertPop title={errors.purpose.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select
          className="outline w-full max-w-[400px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          variant="filled"
          placeholder="Select category"
          name="category"
          {...register("category", {
            required: "Select Category",
          })}>
          {propertyCategoriesOptions.map((category) => (
            <option key={category.key} value={category.value}>
              {category.text}
            </option>
          ))}
        </Select>
        {errors.category && <AlertPop title={errors.category.message} />}
      </FormControl>

      {/* <FormControl>
      <FormLabel>Price</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"></InputLeftElement>
        <Input
          className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
          variant="flushed"
          name="price"
          type="number"
          {...register("price", {
            required: "Please enter a price",
            min: {
              value: 3,
              message: "Price too short or invalid",
            },
            pattern: {
              value: numericPattern,
              message: "Invalid price format",
            },
            valueAsNumber: true,
          })}
        />
      </InputGroup>
      {errors.price && <AlertPop title={errors.price.message} />}
    </FormControl> */}
    </>
  );
};

export default Page0;
