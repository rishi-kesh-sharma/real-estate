import React, { useState, useEffect } from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import CustomSelect from "@/components/utils/CustomSelect";
import { locationData, propertyMeta } from "@/data/Data";
import SearchBox from "@/components/utils/SearchBox";
import TabBtns from "@/components/utils/TabBtns";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import HeroText from "./HeroText";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  // const handleResize = (e) => {
  //   if (window.innerWidth >= 1024) return setCurrentDevice("lg");
  //   if (window.innerWidth < 768) return setCurrentDevice("sm");
  //   if (window.innerWidth >= 768 && window.innerWidth < 1024)
  //     return setCurrentDevice("md");
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   window.addEventListener("scroll", (e) => {});
  //   handleResize();
  // }, []);
  return (
    <Section className={`${styled.hero} min-h-screen`}>
      <Container className="flex justify-center h-screen">
        <div className=" md:w-[80%] lg:w-[70%] flex flex-col justify-center   gap-[4rem] md:gap-[2rem] ">
          <HeroText />
          <div className="flex flex-col gap-[0.6rem] md:mt-[2rem] ">
            <TabBtns />
            <SearchBox />
          </div>
        </div>
      </Container>
      {/* </div> */}
    </Section>
  );
};

export default Hero;
