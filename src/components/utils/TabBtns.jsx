import React, { useState } from "react";

const heroTabItems = [
  { id: 1, title: "Buy", value: "buy" },
  { id: 2, title: "Rent", value: "rent" },
  { id: 3, title: "Sold", value: "sold" },
];
const TabBtns = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleClick = (id) => {
    return (e) => {
      setActiveButton(id);
    };
  };

  return (
    <ul class="flex justify-between  text-sm font-medium text-center text-gray-400 bg-gray-500  rounded-lg">
      {heroTabItems.map((item) => {
        const { title, value, id } = item;
        return (
          <li
            onClick={handleClick(id)}
            className={`cursor-pointer text-white ${
              activeButton == id && "bg-white text-green-700"
            } ${
              activeButton !== id && "hover:bg-gray-200  hover:text-green-700"
            } font-semibold text-lg px-[1rem] py-[0.5rem] rounded-lg md:py-[1rem] text-[1.25rem] `}>
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default TabBtns;
