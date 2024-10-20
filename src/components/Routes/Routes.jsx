import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import Sale from '../Sale/Sale';
import New from '../New/New';

const AppRoutes = () => {
  return (
   <Routes>
        <Route index element={<Home />}/>
        <Route index element={<Sale />}/>
        <Route index element={<New />}/>

   </Routes>
  );
};

export default AppRoutes;