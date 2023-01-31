import React from "react";
import Heading from "../common/Heading";
import { list } from "../../data/Data";

import styled from "./FeaturedProperties.module.css";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import CustomSlider from "../utils/CustomSlider";

const FeaturedProperties = () => {
  return (
    <>
      <section className={`${styled.recent} ${styled.padding} mt-[3rem] `}>
        <div className="container ">
          <Heading
            title="Featured Properties"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="my-[1rem] ">
            <CustomSlider>
              {" "}
              {list.map((featured, index) => {
                return <FeaturedPropertyCard featured={featured} key={index} />;
              })}
            </CustomSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProperties;
