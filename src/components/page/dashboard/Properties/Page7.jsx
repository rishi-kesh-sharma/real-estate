import AlertPop from "@/components/utils/FormAlert";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

const Page7 = ({ register, errors, emailPattern, phonePattern }) => {
  return (
    <>
      <Heading>Contact Information</Heading>
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <InputGroup>
          <InputLeftElement
            className="text-gray-500 my-[0.5rem] mx-[0.5rem]"
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em">
            <EmailIcon className="m" />
          </InputLeftElement>
          <Input
            className="outline w-full outline-gray-200 rounded-sm outline-1 px-[2.5rem] py-[0.4rem]"
            variant="flushed"
            name="email"
            {...register("email", {
              required: "Enter contact email address",
              pattern: {
                value: emailPattern,
                message: "Invalid email format",
              },
            })}
          />
        </InputGroup>
        {errors.email && <AlertPop title={errors.email.message} />}
      </FormControl>
      <FormControl>
        <FormLabel>Telephone</FormLabel>
        <InputGroup>
          <InputLeftElement
            className="text-gray-500 my-[0.5rem] mx-[0.5rem]"
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em">
            <PhoneIcon />
          </InputLeftElement>
          <Input
            className="outline w-full outline-gray-200 rounded-sm outline-1 px-[2.5rem] py-[0.4rem]"
            variant="flushed"
            name="telephone"
            placeholder="ex: +237XXXXX..."
            {...register("telephone", {
              required: "Enter contact telephone number",
              pattern: {
                value: phonePattern,
                message: "Invalid phone number format",
              },
            })}
          />
        </InputGroup>
        {errors.telephone && <AlertPop title={errors.telephone.message} />}
      </FormControl>
    </>
  );
};

export default Page7;
