import React from "react";
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import AlertPop from "@/components/utils/FormAlert";

const Page1 = ({
  register,
  errors,
  handleDistrictChange,
  handleProvinceChange,
  provinceOptions,
  municipalityOptions,
  districtOptions,
  getValues,
}) => {
  return (
    <>
      <Heading>Address Information</Heading>

      <div className="flex flex-wrap gap-[2rem]">
        <FormControl>
          <FormLabel>State/Province</FormLabel>
          <Select
            // onClick={handleProvinceChange}
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="filled"
            placeholder="Select Province/State"
            name="province"
            {...register("province", {
              required: "Select Province/State",
            })}
            onChange={handleProvinceChange}>
            {provinceOptions.map((province) => (
              <option
                key={province.key}
                value={province.value}
                id={province.key}>
                {province.text}
              </option>
            ))}
          </Select>
          {errors?.province && <AlertPop title={errors.province.message} />}
        </FormControl>
        <FormControl>
          <FormLabel>District</FormLabel>
          <Select
            disabled={getValues("province") ? false : true}
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="filled"
            placeholder="Select District"
            name="district"
            {...register("district", {
              required: "Select District",
            })}
            onChange={handleDistrictChange}>
            {districtOptions.map((district) => (
              <option
                key={district.key}
                value={district.value}
                id={district.key}>
                {district.text}
              </option>
            ))}
          </Select>
          {errors?.district && <AlertPop title={errors.district.message} />}
        </FormControl>
        <FormControl>
          <FormLabel>Municipality</FormLabel>
          <Select
            disabled={
              getValues("province") && getValues("district") ? false : true
            }
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="filled"
            placeholder="Select Municipality"
            name="municipality"
            {...register("municipality", {
              required: "Select Municipality",
            })}>
            {municipalityOptions.map((municipality) => (
              <option
                key={municipality.key}
                value={municipality.value}
                id={municipality.key}>
                {municipality.text}
              </option>
            ))}
          </Select>
          {errors?.municipality && (
            <AlertPop title={errors.municipality.message} />
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="flushed"
            name="address"
            {...register("address", {
              required: "Please enter an address",
              minLength: {
                value: 8,
                message: "Address name too short",
              },
            })}
          />
          {errors?.address && <AlertPop title={errors.address.message} />}
        </FormControl>
        <FormControl>
          <FormLabel>Postal Code</FormLabel>
          <Input
            className="outline w-full max-w-[170px] outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
            variant="flushed"
            name="postal_code"
            {...register("postal_code", {
              required: "Enter a valid postal code",
              minLength: {
                value: 4,
                message: "Enter a valid postal code",
              },
            })}
          />
          {errors?.postal_code && (
            <AlertPop title={errors.postal_code.message} />
          )}
        </FormControl>

        <div>
          <FormLabel>Map</FormLabel>
          <FormControl className="overflow-hidden">
            {getValues("map") && (
              <iframe
                src={getValues("map")}
                height="200"
                width="300"
                title="Google Map"></iframe>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Enter Map Source Here</FormLabel>
            <Input
              className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
              variant="flushed"
              name="map"
              {...register("map", {
                required: "Enter Map link",
                minLength: {
                  value: 4,
                  message: "Enter Map link",
                },
              })}
            />
            {errors?.map && <AlertPop title={errors.map.message} />}
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Page1;
