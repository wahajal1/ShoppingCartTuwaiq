import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function HomePage({ cart, setCart }) {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
}

export default HomePage;
