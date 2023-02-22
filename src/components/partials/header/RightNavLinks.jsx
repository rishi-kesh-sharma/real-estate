import React from "react";
import Link from "next/link";
import DropdownProfileAvatar from "@/components/utils/ProfileAvatar";
const stylingForButton =
  "text-white rounded hover:bg-gray-200 bg-green-500 hover:bg-gray-100 text-gray-100 hover:text-gray-800 ";

const profileLinks = [
  {
    name: "Profile",
    path: "/dashboard/profile",
  },

  { name: "Saved Homes", path: "/homes/saved", forAuthenticated: true },
  {
    name: "Saved Searches",
    path: "/searches/saved",
  },
  {
    name: "Logout",
  },
];
const ProfileDropDown = () => {
  return (
    <li className="relative">
      <button
        onClick={(e) => {
          console.log("avatar clicked");
          e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
        }}
        type="button"
        class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example">
        <span
          class="flex-1 ml-3 text-left whitespace-nowrap"
          sidebar-toggle-item>
          {"Profile"}
        </span>
        <svg
          sidebar-toggle-item
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <ul
        id="dropdown-example"
        class="hidden absolute bg-white left-0 w-[200px] ">
        {profileLinks.map((dropItem) => {
          return !dropItem.path && isAuthenticated == item?.forAuthenticated ? (
            <li className="border">
              <div class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {dropItem.name}
              </div>
            </li>
          ) : (
            <li className="border">
              <Link
                href={dropItem.path}
                // href={""}
                class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {dropItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
const AuthButton = () => {
  return (
    <li className="mt-0 relative">
      <Link
        href={"/auth"}
        className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${stylingForButton}`}>
        <div class="flex-1 ml-3 whitespace-nowrap">{"SignUp or Login"}</div>
      </Link>
    </li>
  );
};
const RightNavLinks = ({ links, handleNavLinksClick, isAuthenticated }) => {
  return (
    <ul class="flex items-center">
      {links?.map((item) => {
        return !item.dropItems ? (
          !item.path && isAuthenticated == item?.forAuthenticated ? (
            <li className="mt-0 relative">
              <div
                className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  item?.isButton && stylingForButton
                }`}>
                <div class="flex-1 ml-3 whitespace-nowrap">{item.name}</div>
              </div>
            </li>
          ) : (
            isAuthenticated == item?.forAuthenticated && <AuthButton />
          )
        ) : (
          isAuthenticated && <ProfileDropDown />
        );
      })}
    </ul>
  );
};

export default RightNavLinks;
