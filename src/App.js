import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services.js";
import Banner from "./components/Banner/Banner.js";
import AppStore from "./components/Appstore/AppStore.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easin: "ease-in",
      delay: 100,
    });
  });
  return  <div className="overflow-x-hidden">
    <Navbar />
    <Home />
    <Services />
    <Banner />
    <AppStore />
    <Testimonial />
    <Footer />
  </div>
  
}

export default App