import React from "react";
import Heading from "../../common/Heading";
import styled from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={`${styled.hero} `}>
        <div className={`container ${styled.container}`}>
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <form className={`flex ${styled.flex} ${styled.form}`}>
            <div className={`${styled.box} box`}>
              <span>City/Street</span>
              <input
                className={`${styled.input} input`}
                type="text"
                placeholder="Location"
              />
            </div>
            <div className={styled.box}>
              <span>Property Type</span>
              <input
                className={styled.input}
                type="text"
                placeholder="Property Type"
              />
            </div>
            <div className={styled.box}>
              <span>Price Range</span>
              <input
                className={styled.input}
                type="text"
                placeholder="Price Range"
              />
            </div>
            <div className={styled.box}>
              <h4>Advance Filter</h4>
            </div>
            <button className={styled.btn1}>
              <i className={"fa fa-search"}></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
