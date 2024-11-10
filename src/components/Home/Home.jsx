import React from 'react';
import { useSelector } from 'react-redux';


import Poster from '../Poster/Poster';
import Products from '../Producrts/Producrts';
import Categories from '../Categories/Categories';
import Stripe from '../Stripe/Stripe';
import ReviewSlider from '../ReviewSlider/ReviewSlider';

const Home = () => {

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <Poster />
      <Stripe />
      <Products products={ products.list } amount = {4} title = 'NEW ARRIVALS' />
      <Products products={ products.list } amount = {4} title = 'TOP SALLING' />
      <Categories categories={ categories.list } products={products.list} amount = {4} title = 'BROWSE BY DRESS STYLE' />
      <ReviewSlider  title = 'OUR HAPPY CUSTOMERS' />
    </>
  )
}

export default Home;