import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getCategories } from '../../features/categories/categoriesSlice';


const App = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getCategories());
  },[dispatch])

  return (
    <div className='app'>
        <Header />
        <AppRoutes />
        <Footer />
    </div>
  )
}

export default App;