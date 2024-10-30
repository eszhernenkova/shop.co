import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Producrts/Producrts';
import { useSelector } from 'react-redux';

const Home = () => {

  const { list } = useSelector(({ products }) => products)
  return (
    <>
      <Poster />
      <Products products={ list } amount = {4} title = 'NEW ARRIVALS' />
    </>
  )
}

export default Home;