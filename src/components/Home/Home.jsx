import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Producrts/Producrts';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';

const Home = () => {

  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  return (
    <>
      <Poster />
      <Products products={ products.list } amount = {4} title = 'NEW ARRIVALS' />
      <Categories categories={ categories.list } products={products.list} amount = {4} title = 'BROWSE BY DRESS STYLE' />

    </>
  )
}

export default Home;