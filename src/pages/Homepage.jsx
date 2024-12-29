import React from "react";
import Navbar from "../components/navbar/Navbar";
import MyCard from "../components/mycard/Mycard";
import About from "../components/about/About";
import Eduction from "../components/education/Eduction";
import Skills from "../components/skills/Skills";
import Project from "../components/projects/Project";
import Footer from "../components/footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <MyCard />
      <About />
      <Eduction />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default Homepage;
