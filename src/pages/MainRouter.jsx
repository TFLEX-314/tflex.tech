import React from 'react';
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";
import {About,Solution} from '../pages' 

const MainRouter = () => {
  return (
    <>
      <Header />
      <main className="flex-auto">
        <Outlet />
      
      </main>
      <About/>
      <Solution/>
      <Footer />
    </>
  )
}

export default MainRouter;