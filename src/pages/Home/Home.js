import React from "react";
import Blogs from "../../components/Blogs";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero infinite="true" autoPlay="true" deviceType="desktop" />
      <Blogs />
    </div>
  );
};

export default Home;
