import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.mdWidth ? props.mdWidth : "md:2rem")};
  height: ${(props) => (props.mdHeight ? props.mdHeight : "md:2rem")};
  background: ${({ redBackground }) => (redBackground ? "#dbdbdb" : "#b02319")};
  border-radius: 10px;
  color: ${({ redBackground }) => (!redBackground ? "#dbdbdb" : "#b02319")};
`;
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isOnSmDevice, setIsOnSmDevice] = useState(false);
  const [redBackground, setRedBackground] = useState(false);
  const handleResize = (e) => {
    if (window.innerWidth >= 768) return setIsOnSmDevice(false);
    setIsOnSmDevice(true);
  };

  const handleNavLinksClick = (e) => {
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 10) return setRedBackground(true);
      setRedBackground(false);
    });
    if (window.innerWidth >= 768) return setIsOnSmDevice(false);
    return setIsOnSmDevice(true);
  }, []);

  return (
    <div className="relative min-h-[100px] " style={{ zIndex: 1000 }}>
      <div className="pl-[1rem] pt-[1rem]">
        <img className="h-[3rem] w-[5rem]" src="./images/logo.png" alt="" />
      </div>
      {!show && (
        <FiMenu
          className="fixed z-[5000] text-gray-300 text-bold top-6 right-[3rem] text-4xl font-extralight md:hidden"
          onClick={(e) => setShow(true)}
        />
      )}
      {show && (
        <RxCross1
          className="fixed text-red-500 top-[2rem] text-3xl  left-2 z-50 md:hidden"
          onClick={(e) => setShow(false)}
        />
      )}

      {/* navbar for small device */}
      {show && isOnSmDevice && (
        <div className=" bg-white  md:hidden   text-red-600 fixed left-0 z-40  right-0 top-0 h-[100vh] ">
          <ul className="flex flex-col w-[100vw] items-center justify-center h-[100vh]  py-[3rem] md:hidden  max-h-[60rem] gap-[0.7rem]">
            <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  "
            >
              <a href="#home">Home</a>
            </li>

            <hr className="bg-purple-400 w-[100%]" />
            {/* <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold  "
            >
              <a href="#banks">Blood Banks</a>
            </li>
            <hr className="bg-purple-400 w-[100%]" />
            <li
              onClick={handleNavLinksClick}
              className="m-2 text-lg font-semibold"
            >
              <a href="/donate">
                <Button mdWidth={"110px"} mdHeight={"40px"}>
                  Donate Now
                </Button>
              </a>
            </li> */}
          </ul>
        </div>
      )}
      {!isOnSmDevice && (
        <ul
          style={{ zIndex: 1000 }}
          className={`  fixed text-gray-200   left-0 right-0  top-0   w-[100vw] flex items-center justify-center h-[5rem] md:h-[4rem] topbar ${
            redBackground ? "bg-[#b02319] " : "bg-transparent"
          }`}
        >
          <li className="mx-[1rem] py-[0.4rem] text-lg font-semibold  md:text-sm  ">
            <a href="#home">Home</a>
          </li>

          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="#banks">Our Banks</a>
          </li>
          <li className="mx-[1rem] text-lg font-semibold  md:text-sm  ">
            <a href="/donate">
              <Button
                mdWidth={"110px"}
                mdHeight={"40px"}
                redBackground={redBackground}
              >
                Donate Now
              </Button>
            </a>
          </li>
        </ul>
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
