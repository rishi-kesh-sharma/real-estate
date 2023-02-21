import Link from "next/link";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState } from "@/store/features/authSlice.js";
const ToggleNavigation = ({ links, handleNavLinksClick, show, setShow }) => {
  const res = useSelector(selectAuthState);
  console.log(res);
  const handleLogout = (e) => {
    console.log("logout button clicked");
  };
  return (
    <div className="  text-red-600 fixed left-0 z-40  right-0 top-0 h-[100vh]     ">
      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 right-0 z-40 w-64 h-screen "
        aria-label="Sidebar"
      >
        {show && (
          <RxCross1
            className="absolute text-red-600 top-[1rem] text-3xl  left-[0.5rem] z-50 cursor-pointer "
            onClick={(e) => setShow(false)}
          />
        )}
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 mt-[4rem]">
            {links?.map((item) => {
              return !item.dropItems ? (
                <li
                  onClick={handleNavLinksClick}
                  className="border-b-[1px] border-b-gray-300"
                >
                  {item.path ? (
                    <Link
                      href={item?.path}
                      className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    </Link>
                  ) : (
                    <div
                      onClick={handleLogout}
                      className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
                    >
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  )}
                </li>
              ) : (
                <li className=" border-b-[1px] border-b-gray-300 ">
                  <button
                    onClick={(e) => {
                      e.currentTarget.parentNode.lastChild.classList.toggle(
                        "hidden"
                      );
                    }}
                    type="button"
                    class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <span
                      class="flex-1 ml-3 text-left whitespace-nowrap text-gray-600"
                      sidebar-toggle-item
                    >
                      {item.name}
                    </span>
                    <svg
                      sidebar-toggle-item
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul id="dropdown-example" class="hidden py-2 space-y-2">
                    {item.dropItems.map((dropItem) => {
                      return (
                        <li
                          onClick={handleNavLinksClick}
                          className="border-b-[1px] border-b-gray-300"
                        >
                          <Link
                            href={dropItem.path}
                            class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            {dropItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default ToggleNavigation;
