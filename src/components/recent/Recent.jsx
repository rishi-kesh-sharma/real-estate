import React from "react";
import Heading from "../common/Heading";
import { list } from "../../data/Data";

import styled from "./Recent.module.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className={`${styled.recent} ${styled.padding} padding`}>
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="flex flex-wrap items-center justify-center gap-[2rem] ">
            {list.map((recent, index) => {
              return <RecentCard recent={recent} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
