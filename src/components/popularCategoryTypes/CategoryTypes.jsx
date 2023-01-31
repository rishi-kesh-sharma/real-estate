import React from "react";
import Heading from "../common/Heading";
import styled from "./CategoryTypes.module.css";
import CategoryTypeCard from "./CategoryTypeCard";
import { featured } from "../../data/Data";
import CustomSlider from "../utils/CustomSlider";

const CategoryTypes = () => {
  return (
    <>
      <section className={`${styled.featured} featured background `}>
        <div className="container">
          <Heading
            title="Popular Categories"
            subtitle="Find All Type of Property."
          />
          <div className="my-[1rem]">
            <CustomSlider>
              {" "}
              {featured.map((feature, index) => (
                <CategoryTypeCard feature={feature} key={index} />
              ))}
            </CustomSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryTypes;
