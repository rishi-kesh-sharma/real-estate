import React from "react";
import Link from "next/link";

const RightNavLinks = ({ links, handleNavLinksClick }) => {
  return (
    <ul className="flex gap-[2rem] items-center">
      {links?.map((item) => {
        const isButton = item.isButton;
        return (
          <li
            style={{ listStyleType: "none" }}
            className={`mt-0 relative ${
              item.isButton &&
              "bg-green-600 text-white rounded hover:bg-gray-50 hover:text-green-800"
            }`}
            onClick={handleNavLinksClick}>
            <Link
              href={item.path}
              className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                item.isButton &&
                "text-white rounded hover:bg-gray-200 hover:text-green-800 p-0"
              }`}>
              <span
                class={`flex-1 ml-3 whitespace-nowrap  inline-block ${
                  item.isButton && "text-white hover:text-green-800 p-2"
                }`}>
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RightNavLinks;
