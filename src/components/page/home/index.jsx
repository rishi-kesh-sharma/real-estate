import React from "react";
import Hero from "./Hero";

import CategoryTypes from "./PopularCategoryTypes";
import Recent from "./Recent";
import FeaturedProperties from "./FeaturedProperties";
import FeaturedAgencies from "./FeaturedAgencies";
import Blogs from "./Blogs";
import ExploreHomes from "./ExploreHomes/ExploreHomes";
import HelpSection from "./HelpSection/HelpSection";
import { wrapper } from "@/store/store";
import { useSelector } from "react-redux";
import { selectUserState } from "@/store/features/userSlice";

const Home = () => {
  const user = useSelector(selectUserState);
  console.log(user);
  return (
    <>
      <Hero />
      <CategoryTypes />
      <FeaturedProperties />
      <Recent />
      <ExploreHomes />
      <Blogs />
      <FeaturedAgencies />
      <HelpSection />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(setAuthState(false));
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default Home;
