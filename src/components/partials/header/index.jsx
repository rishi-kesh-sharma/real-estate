import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { nav } from "@/data/Data";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [currentDevice, setCurrentDevice] = useState("lg");
  const handleResize = (e) => {
    if (window.innerWidth >= 1024) return setCurrentDevice("lg");
    if (window.innerWidth < 768) return setCurrentDevice("sm");
    if (window.innerWidth >= 768 && window.innerWidth < 1024)
      return setCurrentDevice("md");
  };

  const handleNavLinksClick = (e) => {
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // window.addEventListener("scroll", (e) => {
    //   if (window.scrollY > 10) return setRedBackground(true);
    //   setRedBackground(false);
    // });
    handleResize();
  }, []);

  return (
    <div
      className=" fixed bg-white min-h-[70px] w-[100%] flex justify-between items-center"
      style={{ zIndex: 1000 }}>
      <div className="pl-[1rem] flex">
        <Image
          src={"/images/logo.png"}
          width={60}
          height={60}
          alt=""
          className="h-[2rem] w-[5rem]"
        />
        {currentDevice == "lg" && (
          <ul class="  flex">
            {nav?.links?.leftLinks?.map((item) => {
              return !item.dropItems ? (
                <li className="mt-0 relative" onClick={handleNavLinksClick}>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      {item.name}
                    </span>
                  </a>
                </li>
              ) : (
                <li className="relative" onClick={handleNavLinksClick}>
                  <button
                    onClick={(e) => {
                      e.currentTarget.parentNode.lastChild.classList.toggle(
                        "hidden"
                      );
                    }}
                    type="button"
                    class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example">
                    <span
                      class="flex-1 ml-3 text-left whitespace-nowrap"
                      sidebar-toggle-item>
                      {item.name}
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
                    {item.dropItems.map((dropItem) => {
                      return (
                        <li onClick={handleNavLinksClick} className="border">
                          <a
                            href={dropItem.path}
                            class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            {dropItem.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="flex gap-[2rem] items-center">
        {currentDevice == "lg" &&
          //  ( <ul>
          //     {

          //     }
          //   </ul>)

          nav?.links?.rightLinks?.map((item) => {
            return (
              <li
                style={{ listStyleType: "none" }}
                className="mt-0 relative"
                onClick={handleNavLinksClick}>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span class="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                </a>
              </li>
            );
          })}

        {/* {!show && ( */}
        <FiMenu
          className=" text-black text-bold mr-[1.5rem] right-[3rem] text-4xl font-extralight cursor-pointer "
          onClick={(e) => setShow(true)}
        />
        {/* )} */}
      </div>

      {/* sidebar for small device  and medium device*/}
      {show &&
        (currentDevice == "sm" ||
          currentDevice == "md" ||
          currentDevice == "lg") && (
          <div className="  text-red-600 fixed left-0 z-40  right-0 top-0 h-[100vh]     ">
            <aside
              id="sidebar-multi-level-sidebar"
              class="fixed top-0 right-0 z-40 w-64 h-screen "
              aria-label="Sidebar">
              {show && (
                <RxCross1
                  className="absolute text-red-600 top-[1rem] text-3xl  left-[0.5rem] z-50 cursor-pointer "
                  onClick={(e) => setShow(false)}
                />
              )}
              <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul class="space-y-2 mt-[4rem]">
                  {nav?.links?.sideBarLinks?.map((item) => {
                    return !item.dropItems ? (
                      <li
                        onClick={handleNavLinksClick}
                        className="border-b-[1px] border-b-gray-300">
                        <a
                          href="#"
                          class="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700">
                          <span class="flex-1 ml-3 whitespace-nowrap">
                            {item.name}
                          </span>
                        </a>
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
                          data-collapse-toggle="dropdown-example">
                          <span
                            class="flex-1 ml-3 text-left whitespace-nowrap text-gray-600"
                            sidebar-toggle-item>
                            {item.name}
                          </span>
                          <svg
                            sidebar-toggle-item
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </button>
                        <ul id="dropdown-example" class="hidden py-2 space-y-2">
                          {item.dropItems.map((dropItem) => {
                            return (
                              <li
                                onClick={handleNavLinksClick}
                                className="border-b-[1px] border-b-gray-300">
                                <a
                                  href={dropItem.path}
                                  class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                  {dropItem.name}
                                </a>
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
        )}
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { nav } from "@/data/Data";
// import styled from "./header.module.css";
// import Link from "next/link";
// const Header = () => {
//   const [navList, setNavList] = useState(false);

//   return (
//     <>
//       <header className={styled.header}>
//         <div className={`container flex`}>
//           <div className={styled.logo}>
//             <img src="./images/logo.png" alt="" />
//           </div>

//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
