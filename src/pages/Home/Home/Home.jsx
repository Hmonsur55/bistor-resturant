import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet, } from "react-helmet-async";
const Home = () => {
    return (
      <div className="">
        <Helmet>
          <title>Bistro | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Features></Features>
        <Testimonial></Testimonial>
      </div>
    );
};

export default Home;