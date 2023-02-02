import React from "react";

const Cards = ({ styles, children }) => {
  return <div className={styles}>{children}</div>;
};

export default Cards;

// cursor-pointer group px-[0.5rem] py-[1rem] w-[250px] bg-white  flex flex-col justify-center items-center
// styles,
// data: {
//   imageProps,
//   settings: { preloadImage, placeholder, objectFit },
// },
