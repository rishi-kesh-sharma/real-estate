import React from "react";
import Heading from "@/components/utils/Heading";
import Image from "next/image";
import CustomSlider from "@/components/utils/CustomSlider";
import { list } from "./../../../../data/Data";
import ExploreHomesCard from "./ExploreHomesCard";
const ExploreHomes = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <Heading
          title={"Explore homes"}
          subtitle={
            "Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you."
          }
        />
        <div className="my-[1rem] py-[1rem]">
          <CustomSlider settings={settings}>
            {list.map((property, index) => (
              <ExploreHomesCard property={property} key={index} />
            ))}
          </CustomSlider>
        </div>
      </div>
    </section>
  );
};

export default ExploreHomes;
