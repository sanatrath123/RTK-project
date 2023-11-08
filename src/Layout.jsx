import React from 'react'
import Header from "./Component/Header/Header.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

 function Layout(){
  return ( <>
   <Header />

   <Outlet />

   <Footer />
    </>
    )
 }

 export default Layout