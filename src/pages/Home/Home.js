import React from "react";
import Footer from "../../common/Footer";
import Blogs from "../../components/Blogs";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero infinite="true" autoPlay="true" deviceType="desktop" />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
