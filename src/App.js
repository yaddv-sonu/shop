
import React from "react";
import Header from "./components/Header";
import PopularCategories from "./components/PopularCategories";
import PopularProducts from "./components/PopularProducts";
import FollowUs from "./components/FollowUs";
import Subscriber from "./components/Subscriber";
import Footer from "./components/Footer";
import FollowUsInstagram from "./components/FollowUsInstagram";
import PromotionalBanner from "./components/PromotionalBanner";
import SummerSaleBanner from "./components/SummerSaleBanner";
import HeaderOptions from "./components/HeaderOptions";

function App() {
  return (
    <div>
      <HeaderOptions/>
      <Header />
      <PromotionalBanner/>
      <PopularCategories />
      <PopularProducts />
      <FollowUsInstagram />
      <SummerSaleBanner/>

      <div className=" columns-2	">
        <Subscriber />
        <FollowUs  />
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
