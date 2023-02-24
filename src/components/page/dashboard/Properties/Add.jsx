import React, { useEffect } from "react";
import Head from "next/head";
import {
  Heading,
  Stack,
  Text,
  Box,
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
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  Textarea,
  Image,
  useToast,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowBackIcon,
  EmailIcon,
  PhoneIcon,
  AttachmentIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { useState, createRef } from "react";
import { useForm } from "react-hook-form";
import Compressor from "compressorjs";
// import Navbar from "@/components/layout/navbar";
import AlertPop from "@/components/utils/FormAlert";
// import { countryOptions } from "@/assets/countries";
import {
  countryOptions,
  categoryOptions,
  districtOptions,
  provinceOptions,
  municipalityOptions,
} from "@/data/Data";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import { Stepper } from "@progress/kendo-react-layout";
import {
  getAreaUnits,
  getDistricts,
  getMunicipalities,
  getPropertyCategories,
  getProvinces,
  getRoadTypes,
} from "@/apiCalls/general";
import PropertyAreaTabs from "./PropertyAreaTabs";
// import { categoryOptions } from "@/assets/categories";
// import
// import UploadImage from "@/lib/firebase/estate/uploadImage";

export default function Add() {
  const imageInputRef = createRef();

  const toast = useToast();

  const [provinceOptions, setProvinceOptions] = useState([]);
  const [districtOptions, setdistrictOptions] = useState([]);
  const [municipalityOptions, setMunicipalityOptions] = useState([]);
  const [propertyCategoriesOptions, setPropertyCategoriesOptions] = useState(
    []
  );
  const [areaUnitsOptions, setAreaUnitsOptions] = useState([]);
  const [roadTypesOptions, setRoadTypesOptions] = useState([]);
  const [facingOptions, setFacingOptions] = useState([
    { key: "south", flag: "south", value: "south", text: "south" },
    { key: "north", flag: "north", value: "north", text: "north" },
    { key: "east", flag: "east", value: "east", text: "east" },
    { key: "west", flag: "west", value: "west", text: "west" },
  ]);

  const getApiData = async () => {
    try {
      let provinces = await getProvinces();
      let propertyCategories = await getPropertyCategories();
      let areaUnits = await getAreaUnits();
      let roadTypes = await getRoadTypes();
      provinces = provinces.data.data;
      propertyCategories = propertyCategories.data.data;
      areaUnits = areaUnits.data.data;
      roadTypes = roadTypes.data.data;

      // formatting provinces
      provinces = provinces.map((item) => {
        const { name_en, id } = item;
        return {
          key: id,
          value: name_en,
          flag: name_en,
          text: name_en,
        };
      });
      // formatting propertyCategories
      propertyCategories = propertyCategories.map((item) => {
        const { name, id } = item;
        return {
          key: id,
          value: name,
          flag: name,
          text: name,
        };
      });
      // formatting roadTypes
      roadTypes = roadTypes.map((item) => {
        const { name, id } = item;
        return {
          key: id,
          value: name,
          flag: name,
          text: name,
        };
      });
      // formatting areaUnits
      areaUnits = areaUnits.map((item) => {
        const { name, id } = item;
        return {
          key: id,
          value: name,
          flag: name,
          text: name,
        };
      });
      setProvinceOptions(provinces);
      setPropertyCategoriesOptions(propertyCategories);
      setRoadTypesOptions(roadTypes);
      setAreaUnitsOptions(areaUnits);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getApiData();
  });

  //handle province option change
  const handleProvinceChange = async (e) => {
    const selectedId = e.target[e.target.options.selectedIndex].id;
    try {
      let districts = await getDistricts(selectedId);
      districts = districts.data.data;

      districts = districts.map((item) => {
        const { name_en, id } = item;
        return {
          key: id,
          value: name_en,
          flag: name_en,
          text: name_en,
        };
      });
      setdistrictOptions(districts);
    } catch (err) {
      console.log(err.response);
    }
  };
  //handle district option change
  const handleDistrictChange = async (e) => {
    const selectedId = e.target[e.target.options.selectedIndex].id;
    console.log(selectedId);
    try {
      let municipalities = await getMunicipalities(selectedId);
      municipalities = municipalities.data.data;

      municipalities = municipalities.map((item) => {
        const { name_en, id } = item;
        return {
          key: id,
          value: name_en,
          flag: name_en,
          text: name_en,
        };
      });
      setMunicipalityOptions(municipalities);
    } catch (err) {
      console.log(err.response);
    }
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [page, setPage] = useState(0);

  const [image, setImage] = useState();

  const [preview, setPreviewImg] = useState();
  const [steps, setSteps] = React.useState([
    {
      label: "Account Details",
      isValid: undefined,
    },
    {
      label: "Personal Details",
      isValid: undefined,
    },
    {
      label: "Payment Details",
      isValid: undefined,
    },
  ]);

  const numericPattern = /^-?\d*\.?\d*$/;

  const emailPattern =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

  const phonePattern = /^\+(?:[0-9] ?){8,14}[0-9]$/;

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      new Compressor(image, {
        quality: 0.8,
        success: (compressedImage) => {
          setImage(compressedImage);
          setPreviewImg(URL.createObjectURL(compressedImage));
        },
      });
    }
  };

  function goNextPage() {
    if (page === 6) return;
    setPage((page) => page + 1);
  }

  function goBack() {
    if (page === 0) return;
    setPage((page) => page - 1);
  }

  const onSubmit = async (data) => {
    if (!image) {
      toast({
        title: "No image selected.",
        description: "Please choose a display image for the estate.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const estateData = {
      ...data,
      totalRating: 0,
      reviews: 0,
    };
    alert(JSON.stringify(estateData));
    // await UploadImage(image, estateData, toast);
    // console.log(estateData)
  };

  return (
    <>
      {/* <Navbar> */}
      <Section
        maxW="container.xl"
        w="full"
        centerContent
        className="shadow flex-1 lg:flex-[0.6] py rounded-lg">
        <Container
          maxW="xl"
          w="full"
          rounded="lg"
          boxShadow="lg"
          className="py-[1rem]">
          {/* Multi-step form */}
          {/* <Stepper value={page} items={steps} className="flex bg-red-500" /> */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={20} width="100%">
              {/* Initial Page(Step) */}
              {/* {page === 0 && (
                <>
                  <Heading className="text-[1.5rem]">Property Overview</Heading>
                  <FormControl>
                    <FormLabel className="text-gray-600 text-[1rem]">
                      Title
                    </FormLabel>
                    <Input
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.purpose && (
                      <AlertPop title={errors.purpose.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Category</FormLabel>
                    <Select
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.category && (
                      <AlertPop title={errors.category.message} />
                    )}
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
              {/* </>
              )} */}

              {/* Page 1 */}
              {/* {page === 1 && (
                <>
                  <Heading>Address Information</Heading>

                  <FormControl>
                    <FormLabel>State/Province</FormLabel>
                    <Select
                      // onClick={handleProvinceChange}
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.province && (
                      <AlertPop title={errors.province.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>District</FormLabel>
                    <Select
                      disabled={getValues("province") ? false : true}
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.district && (
                      <AlertPop title={errors.district.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Municipality</FormLabel>
                    <Select
                      disabled={
                        getValues("province") && getValues("district")
                          ? false
                          : true
                      }
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.municipality && (
                      <AlertPop title={errors.municipality.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.address && (
                      <AlertPop title={errors.address.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Postal Code</FormLabel>
                    <Input
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.postal_code && (
                      <AlertPop title={errors.postal_code.message} />
                    )}
                  </FormControl>
                  <FormControl className="overflow-hidden">
                    {getValues("map") && (
                      <iframe
                        src={
                          "https://www.google.com/maps/place/%E0%A4%95%E0%A4%BE%E0%A4%A0%E0%A4%AE%E0%A4%BE%E0%A4%A1%E0%A5%8C%E0%A4%81+44600/@27.7090947,85.2560929,12z/data=!3m1!4b1!4m5!3m4!1s0x39eb198a307baabf:0xb5137c1bf18db1ea!8m2!3d27.7172408!4d85.3239655"
                        }
                        height="200"
                        width="300"
                        title="Google Map"></iframe>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Map</FormLabel>
                    <Input
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
                      variant="flushed"
                      name="map"
                      {...register("map", {
                        required: "Enter a valid postal code",
                        minLength: {
                          value: 4,
                          message: "Enter a valid postal code",
                        },
                      })}
                    />
                    {errors.map && <AlertPop title={errors.map.message} />}
                  </FormControl>
                </>
              )} */}

              {/* Page 2 */}
              {page === 0 && (
                <>
                  <Heading>Property Highlights</Heading>
                  <FormControl>
                    <FormLabel>Facing</FormLabel>
                    <Select
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.facing && (
                      <AlertPop title={errors.facing.message} />
                    )}
                  </FormControl>
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
                    tabItems={[
                      { component: "", id: 1 },
                      { component: "", id: 2 },
                      { component: "", id: 3 },
                      { component: "", id: 4 },
                      { component: "", id: 5 },
                    ]}
                  />
                  <FormControl>
                    <FormLabel>Bedrooms</FormLabel>
                    <NumberInput
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    {errors.bedrooms && (
                      <AlertPop title={errors.bedrooms.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Baths</FormLabel>
                    <NumberInput
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                    <FormLabel>Surface Area</FormLabel>
                    <InputGroup>
                      <Input
                        className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
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
                      <InputRightElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em">
                        sqft
                      </InputRightElement>
                    </InputGroup>
                    {errors.surface_area && (
                      <AlertPop title={errors.surface_area.message} />
                    )}
                  </FormControl>
                </>
              )}

              {/* Page 3 */}
              {page === 3 && (
                <>
                  <Heading>Description</Heading>
                  <FormControl>
                    <FormLabel>Property Briefing</FormLabel>
                    <Textarea
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
                      variant="filled"
                      size="lg"
                      maxH="sm"
                      resize="vertical"
                      name="property_briefing"
                      {...register("property_briefing", {
                        required: "Write a little briefing about the property",
                        minLength: {
                          value: 20,
                          message: "Briefing too short",
                        },
                      })}
                    />
                    {errors.property_briefing && (
                      <AlertPop title={errors.property_briefing.message} />
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Additional Information</FormLabel>
                    <Textarea
                      className="outline w-full outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
                      variant="filled"
                      size="lg"
                      maxH="sm"
                      resize="vertical"
                      name="additional_info"
                      {...register("additional_info")}
                    />
                  </FormControl>
                </>
              )}

              {/* Page 4 */}
              {page === 4 && (
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
              )}

              {/* Page 5 */}
              {page === 5 && (
                <>
                  <Heading>Media</Heading>
                  {preview && (
                    <Image
                      className="h-[7rem]"
                      alt="estate_img"
                      src={preview}
                      boxSize="sm"
                      rounded="lg"
                      objectFit="cover"
                      alignSelf="center"
                    />
                  )}
                  <Text color="gray.500" textAlign="start">
                    Select display image
                  </Text>
                  <input
                    className="outline w-full  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
                    ref={imageInputRef}
                    type="file"
                    hidden
                    onChange={handleImageChange}
                  />
                  <Button
                    className="outline  text-gray-500  border-solid border-1 border-gray-200 rounded-lg  px-[0.8rem] py-[0.5rem]"
                    leftIcon={<AttachmentIcon />}
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => imageInputRef.current.click()}>
                    Browse Images
                  </Button>
                </>
              )}

              {/* Page 6 (last step) */}
              {page === 6 && (
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
                    {errors.telephone && (
                      <AlertPop title={errors.telephone.message} />
                    )}
                  </FormControl>
                </>
              )}

              <Stack
                direction="row"
                spacing={2}
                alignSelf="center"
                className="gap-[0.5rem]">
                {page > 0 && (
                  <Button
                    className="bg-green-500 h-[2.5rem]"
                    variant="ghost"
                    leftIcon={<ArrowBackIcon />}
                    onClick={goBack}>
                    Back
                  </Button>
                )}
                {page < 6 && (
                  <Button
                    variant="ghost"
                    rightIcon={<ArrowForwardIcon />}
                    onClick={goNextPage}
                    isDisabled={!isValid}
                    className="bg-green-500 h-[2.5rem]">
                    Next
                  </Button>
                )}
              </Stack>
              {page === 6 && (
                <Button
                  className="bg-green-500 h-[2.5rem]"
                  type="submit"
                  leftIcon={<CheckCircleIcon />}
                  colorScheme="green"
                  isDisabled={!isValid}>
                  Submit
                </Button>
              )}
            </Stack>
          </form>
        </Container>
      </Section>
      {/* </Navbar> */}
    </>
  );
}
