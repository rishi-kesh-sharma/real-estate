import React, { useState, useEffect } from "react";
import Heading from "../../../utils/Heading";
import styled from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import CustomSelect from "@/components/utils/CustomSelect";
import { locationData, propertyMeta } from "@/data/Data";
import SearchBox from "@/components/utils/SearchBox";
import TabBtns from "@/components/utils/TabBtns";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  const handleResize = (e) => {
    if (window.innerWidth >= 1024) return setCurrentDevice("lg");
    if (window.innerWidth < 768) return setCurrentDevice("sm");
    if (window.innerWidth >= 768 && window.innerWidth < 1024)
      return setCurrentDevice("md");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", (e) => {});
    handleResize();
  }, []);
  return (
    <>
      <section className={`${styled.hero} min-h-[100vh]`}>
        <div className={`container  ${styled.container} `}>
          <div className="mt-[7rem] min-w-[280px] max-w-[500px] flex flex-col gap-[4rem] md:block mx-auto md:max-w-[450px] md:mt-[3rem]">
            <div>
              <h1 className="text-[2.5rem]">Search Your Next Home </h1>
              <p className="text-sm">
                Find new & featured property located in your local city.ind new
                & featured property located in your local city."
              </p>
            </div>

            <div className="flex flex-col gap-[0.3rem] md:mt-[5rem] ">
              <TabBtns />
              <SearchBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
