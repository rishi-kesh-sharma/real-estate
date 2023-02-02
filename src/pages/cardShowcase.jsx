import React from "react";
import Cards from "@/components/utils/Cards";
import Card from "@/components/utils/Card";
import { p1 } from "../../public/assets/images/properties";
import PropertyContent from "@/components/utils/PropertyContent";
import { list as properties } from "@/data/Data";
const cardShowcase = () => {
  const contentStyles = "";
  const imageStyles = {};
  const imageProps = {};
  const settings = {
    preLoadImage: "true",
    placeholder: "true",
    objectFit: "cover",
  };
  const styles = "";
  return (
    <div>
      <Cards
        styles={`cursor-pointer group px-[0.5rem] py-[1rem] w-[250px] bg-white  flex flex-col justify-center items-center`}>
        {properties.map((property) => (
          <Card
            url="/property/1"
            styles={styles}
            content={{
              component: <PropertyContent property={property} />,
              styles: contentStyles,
            }}
            image={{ styles: imageStyles, data: { imageProps: p1, settings } }}
          />
        ))}
      </Cards>
    </div>
  );
};

export default cardShowcase;
// styles,
// data: {
//   imageProps,
//   settings: { preloadImage, placeholder, objectFit },
// },
