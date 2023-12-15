import React from "react";
import Hearder from "../components/Hearder";
import Hero from "../components/Hero";
import IconBar from "../components/IconBar";
import HomeServicio from "../components/HomeServicio";
import HeroAtencion from "../components/HeroAtencion";

const Home = () => {
  return (
    <>
      <Hearder />
      <Hero />
      <IconBar />
      <HomeServicio />
      <HeroAtencion />
    </>
  );
};

export default Home;
