import React, { useState, useEffect } from "react";
import Heading from "../../common/Heading";
import styled from "./hero.module.css";
import { BsSearch } from "react-icons/bs";
import CustomSelect from "@/components/utils/CustomSelect";
import { locationData, propertyMeta } from "@/data/Data";

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
      <section className={`${styled.hero} min-h-[100vh] `}>
        <div className={`container ${styled.container}`}>
          <div className="mt-[7rem] md:mt-[1rem]">
            <Heading
              title="Search Your Next Home "
              subtitle="Find new & featured property located in your local city."
            />
          </div>

          <div>
            {currentDevice == "sm" && (
              <div>
                <button
                  onClick={(e) => {
                    console.log(e.currentTarget.parentNode.lastChild);
                    e.currentTarget.parentNode.lastChild.classList.toggle(
                      "hidden"
                    );
                  }}
                  className={`flex items-center justify-between gap-1 w-[100%] max-w-[400px] mx-auto text-2xl mt-[2rem]`}>
                  <span className="text-gray-100 text-xl font-semibold ">
                    Search Property
                  </span>
                  <BsSearch />
                </button>
                <form className="hidden max-w-[400px] mx-auto">
                  <ul id="dropdown-example" class=" bg-white p-[1rem]">
                    <li>
                      {/* <div className="flex flex-col flex-wrap"> */}
                      <CustomSelect
                        className="py-1"
                        optionValues={locationData.provinces}
                        name={"provinces"}
                      />

                      <CustomSelect
                        className="py-1"
                        optionValues={locationData.districts}
                        name="district"
                      />
                      <CustomSelect
                        className="py-1"
                        optionValues={locationData.localLevels}
                        name="local levels"
                      />
                    </li>
                    <li>
                      <CustomSelect
                        className="py-1"
                        optionValues={propertyMeta.purposes}
                        name="Purpose"
                      />
                    </li>
                    <li>
                      <CustomSelect
                        className="py-1"
                        optionValues={propertyMeta.types}
                        name="types"
                      />
                    </li>
                    <li>
                      <CustomSelect
                        className="py-1"
                        optionValues={propertyMeta.budget}
                        name="budget"
                      />
                    </li>
                    <li>
                      <button
                        className={`flex items-center justify-center gap-3 w-[100%] text-lg py-[8px]`}>
                        <BsSearch />
                        <span className="text-gray-100 text-xl font-semibold ">
                          Search
                        </span>
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
            {(currentDevice == "md" || currentDevice == "lg") && (
              <form className="mt-[2rem]">
                <ul
                  id="dropdown-example"
                  class=" bg-white p-[1rem] flex flex-wrap gap-2">
                  <li className="">
                    {/* <div className="flex flex-col flex-wrap"> */}
                    <CustomSelect
                      className="py-1"
                      optionValues={locationData.provinces}
                      name={"provinces"}
                    />
                  </li>

                  <li>
                    <CustomSelect
                      className="py-1"
                      optionValues={locationData.districts}
                      name="district"
                    />
                  </li>
                  <li>
                    <CustomSelect
                      className="py-1"
                      optionValues={locationData.localLevels}
                      name="local levels"
                    />
                  </li>
                  <li>
                    <CustomSelect
                      className="py-1"
                      optionValues={propertyMeta.purposes}
                      name="Purpose"
                    />
                  </li>
                  <li>
                    <CustomSelect
                      className="py-1"
                      optionValues={propertyMeta.types}
                      name="types"
                    />
                  </li>
                  <li>
                    <CustomSelect
                      className="py-1"
                      optionValues={propertyMeta.budget}
                      name="budget"
                    />
                  </li>
                  <li>
                    <button
                      className={`flex items-center justify-center gap-3 w-[100%] text-lg py-[8px]`}>
                      <BsSearch />
                      <span className="text-gray-100 text-xl font-semibold ">
                        Search
                      </span>
                    </button>
                  </li>
                </ul>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

<form
  className={`flex flex-col gap-0   flex-wrap ${styled.flex} ${styled.form}`}>
  <div className="flex flex-row flex-wrap">
    <div className={`${styled.box} box`}>
      <CustomSelect optionValues={locationData.provinces} name={"provinces"} />
    </div>

    <div className={`${styled.box} box`}>
      <CustomSelect optionValues={locationData.districts} name="district" />
    </div>
    <div className={`${styled.box} box`}>
      <CustomSelect
        optionValues={locationData.localLevels}
        name="local levels"
      />
    </div>

    {/* <span>City/Street</span>
              <input
                className={`${styled.input} input`}
                type="text"
                placeholder="Type"
              /> */}
  </div>
  <div className={styled.box}>
    <span>Search Location</span>
    <input className={styled.input} type="text" placeholder="Property Type" />
  </div>
  <div className={styled.box}>
    <span>Property Type</span>
    <input className={styled.input} type="text" placeholder="Property Type" />
  </div>
  <div className={styled.box}>
    <span>Price Range</span>
    <input className={styled.input} type="text" placeholder="Price Range" />
  </div>

  <button
    className={`flex items-center justify-center gap-1 w-[100%] text-2xl`}>
    <BsSearch />
    <span className="text-gray-100 text-xl font-semibold ">Search</span>
  </button>
</form>;
