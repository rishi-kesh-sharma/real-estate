import React from "react";
import { footer } from "@/data/Data";
import styled from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={`${styled.footerContact} footerContact `}>
        <div className={`${styled.container} container`}>
          <div className={`${styled.send} ${styled.flex} flex send`}>
            <div className={`${styled.text} text`}>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className={`bg-gray-100  rounded-full text-[#27ae60]`}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
      <div className=" bg-[#1d2636] pt-[2rem]">
        <div className={`container flex  gap-[0.8rem] `}>
          <input
            type="text"
            placeholder="Email Address"
            className=" input text-black rounded-sm bg-white p-[17px] "
          />
          <button>Subscribe</button>
        </div>
      </div>

      <footer className={`${styled.footer} footer`}>
        <div className={`${styled.container} container`}>
          <div className={`${styled.box} box`}>
            <div className={`${styled.logo} logo`}>
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>
            </div>
          </div>

          {footer.map((val) => (
            <div className={`${styled.box} box`}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className={`${styled.legal} legal`}>
        <span>
          {" "}
          <span className="mr-[0.1rem]">© 2021 RentUP.</span> Designed By APP
          TECHNOLOGIES.
        </span>
      </div>
    </>
  );
};

export default Footer;
