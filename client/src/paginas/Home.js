import React from "react";
import Hero from "./home/Hero";
import Header from "./home/Header";
import Footer from "../componentes/Footer";
import Store from "./home/Store";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Store/>
      <Footer />
    </>
  );
};

export default Home;
