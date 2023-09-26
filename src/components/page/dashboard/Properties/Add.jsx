import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const CustomStepper = dynamic(() => import("../../../utils/CustomStepper"), {
  ssr: false,
});
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
import {
  categoryOptions as categoryOptionsFromData,
  districtOptions as districtOptionsFromData,
  provinceOptions as provinceOptionsFromData,
  municipalityOptions as municipalityOptionsFromData,
  areaUnitOptions as areaUnitsOptionFromData,
  roadTypesOptions as roadTypesOptionsFromData,
  facingOptions as facingOptionsFromData,
  featuresOptions as featuresOptionsFromData,
  validationRegex,
} from "@/data/Data";
const { phonePattern, emailPattern, numericPattern } = validationRegex;
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
// import { Stepper } from "@progress/kendo-react-layout";
import {
  getAreaUnits,
  getDistricts,
  getMunicipalities,
  getPropertyCategories,
  getProvinces,
  getRoadTypes,
} from "@/apiCalls/general";
import PropertyAreaTabs from "./PropertyAreaTabs";
// import TinyMceEditor from "@/components/utils/TinyMceEditor";
import Page0 from "./Page0";
import Page2 from "./Page2";
import Page1 from "./Page1";
import Page3 from "./Page3";
import Page5 from "./Page5";
import Page4 from "./Page4";
import Page6 from "./page6";
import Page7 from "./Page7";
import { BiUser } from "react-icons/bi";
// import CustomStepper from "@/components/utils/CustomStepper";
// import { categoryOptions } from "@/assets/categories";
// import
// import UploadImage from "@/lib/firebase/estate/uploadImage";

export default function Add() {
  // image input ref
  const imageInputRef = createRef();

  // use toast hook
  const toast = useToast();

  // use form hook
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  // page state
  const [page, setPage] = useState(0);

  // property image state
  const [image, setImage] = useState();

  // preview state
  const [preview, setPreviewImg] = useState();

  [{ label: "Step 1" }, { label: "Step 2" }];
  // steps state
  const [steps, setSteps] = React.useState([
    {
      label: "Basic Information",
      isValid: undefined,
      // icon: "k-i-cart",
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

  // data states
  const [provinceOptions, setProvinceOptions] = useState(
    provinceOptionsFromData
  );
  const [districtOptions, setdistrictOptions] = useState(
    districtOptionsFromData
  );
  const [municipalityOptions, setMunicipalityOptions] = useState(
    municipalityOptionsFromData
  );
  const [propertyCategoriesOptions, setPropertyCategoriesOptions] = useState(
    categoryOptionsFromData
  );
  const [areaUnitsOptions, setAreaUnitsOptions] = useState(
    areaUnitsOptionFromData
  );

  const [roadTypesOptions, setRoadTypesOptions] = useState(
    roadTypesOptionsFromData
  );
  const [facingOptions, setFacingOptions] = useState(facingOptionsFromData);
  const [featuresOptions, setFeaturesOptions] = useState(
    featuresOptionsFromData
  );

  // function to fetch general data
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

  // creating units array
  let unitsArray = areaUnitsOptions?.map((item) => {
    return item.text.split("-");
  });

  // getting tab items components from units Array
  let tabItems = unitsArray?.map((units, index) => {
    const components = units.map((unit,index) => {
      return (
        <FormControl key={index} className="w-[8rem] flex flex-wrap">
          <FormLabel className="text-gray-600 text-[1rem]">{unit}</FormLabel>
          <NumberInput>
            <NumberInputField
              className="outline  outline-gray-200 rounded-sm outline-1 px-[0.8rem] py-[0.4rem]"
              variant="flushed"
              placeholder={unit}
              name={unit}
              {...register(unit, {
                // required: `please enter metric in ${unit}`,
              })}
            />
          </NumberInput>
          {errors[unit] && <AlertPop title={errors[unit].message} />}
        </FormControl>
      );
    });
    return {
      id: index + 1,
      components,
    };
  });

  // useEffect for fetching data

  useEffect(() => {
    getApiData();
  }, []);

  // handle property image change
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

  // handle goto next page
  async function goNextPage() {
    const result = await trigger();
    console.log(result);
    if (page === 7) return;

    if (result) {
      setPage((page) => page + 1);
    }
  }

  // handle go back
  function goBack() {
    if (page === 0) return;
    setPage((page) => page - 1);
  }

  // form submit handler
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

  const handleStepsChange = (e) => {};

  // JSX
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
          {/* <Stepper
            value={page}
            items={steps}
            handleChange={handleStepsChange}
            className="flex  gap-[2rem]"
          /> */}
          <CustomStepper steps={steps} activeStep={page} setPage={setPage} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={20} width="100%">
              {/* Initial Page(Step) */}
              {page === 0 && (
                <Page0
                  register={register}
                  errors={errors}
                  propertyCategoriesOptions={propertyCategoriesOptions}
                />
              )}
              {/* Page 1 */}
              {page === 1 && (
                <Page1
                  register={register}
                  errors={errors}
                  handleProvinceChange={handleProvinceChange}
                  handleDistrictChange={handleDistrictChange}
                  provinceOptions={provinceOptions}
                  districtOptions={districtOptions}
                  municipalityOptions={municipalityOptions}
                  getValues={getValues}
                />
              )}
              {/* Page 2 */}
              {page === 2 && (
                <Page2
                  register={register}
                  errors={errors}
                  facingOptions={facingOptions}
                  PropertyAreaTabs={PropertyAreaTabs}
                  areaUnitsOptions={areaUnitsOptions}
                  roadTypesOptions={roadTypesOptions}
                  tabItems={tabItems}
                  numericPattern={numericPattern}
                />
              )}
              {/* Page 3 */}
              {page == 3 && (
                <Page3
                  register={register}
                  errors={errors}
                  featuresOptions={featuresOptions}
                />
              )}
              {/* Page 4 */}
              {page === 4 && <Page4 register={register} errors={errors} />}
              {/* Page 5 */}
              {page === 5 && (
                <Page5
                  register={register}
                  preview={preview}
                  errors={errors}
                  setPreviewImg={setPreviewImg}
                  imageInputRef={imageInputRef}
                  handleImageChange={handleImageChange}
                />
              )}
              {/* Page 6 */}
              {page === 6 && <Page6 />}
              {/* Page 7 (last step) */}
              {page === 7 && (
                <Page7
                  register={register}
                  errors={errors}
                  emailPattern={emailPattern}
                  phonePattern={phonePattern}
                />
              )}
              <Stack
                direction="row"
                spacing={2}
                alignSelf="center"
                className="gap-[0.5rem]">
                {page > 0 && (
                  <Button
                    className={`bg-green-500  px-[0.6rem] py-[0.4rem] rounded-md text-gray-200`}
                    variant="ghost"
                    leftIcon={<ArrowBackIcon />}
                    onClick={goBack}>
                    Back
                  </Button>
                )}
                {page < 7 && (
                  <Button
                    // disabled={!isValid ? true : false}
                    variant="ghost"
                    rightIcon={<ArrowForwardIcon />}
                    onClick={goNextPage}
                    // isDisabled={!isValid}
                    className={`bg-green-500  px-[0.6rem] py-[0.4rem] rounded-md text-gray-200`}>
                    Next
                  </Button>
                )}
              </Stack>
              {page === 7 && (
                <Button
                  className="bg-green-500 h-[2.5rem] text-gray-200"
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
    </>
  );
}
