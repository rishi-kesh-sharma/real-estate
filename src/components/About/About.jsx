import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../../../public/images/general/house.jpg";
import styles from "./About.module.css";

const About = () => {
  console.log(img);
  return (
    <>
      <section
        className={`${styles.about}  pt-[5rem] flex flex-col gap-[3rem] `}>
        <Back name="About Us" title="About Us - Who We Are?" cover={img.src} />
        <div className="container flex flex-col gap-[1.5rem]">
          <div
            className={`${styles.left} ${styles.row} left row flex flex-col gap-[0.3rem]`}>
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className=" font-semibold py-3 px-3 max-w-[150px]">
              More About Us
            </button>
          </div>
          <div className="">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
