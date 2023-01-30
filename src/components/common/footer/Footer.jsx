import React from "react";
import { footer } from "@/data/Data";
import styled from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styled.footerContact}>
        <div className={styled.container}>
          <div className={`${styled.send} ${styled.flex}`}>
            <div className={styled.text}>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className={styled.btn5}>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer className={styled.footer}>
        <div className={styled.container}>
          <div className={styled.box}>
            <div className={styled.logo}>
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className={`${styled.input} ${styled.flex}`}>
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className={styled.box}>
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
      <div className={styled.legal}>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
