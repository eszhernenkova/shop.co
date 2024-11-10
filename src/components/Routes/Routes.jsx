import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import InDrafting from '../pages/InDrafting';


const AppRoutes = () => {
  return (
   <Routes>
        <Route index element={<Home />}/>
        <Route path="/in-drafting" element={<InDrafting />}/>

   </Routes>
  );
};

export default AppRoutes;