import './App.css';
import React from "react";

import {
  CarRentalProvider
} from "./hire";


import CustNavbar from './components/CustNavbar.jsx';
import Cars from './components/Cars.jsx';

export default function App() {

  return (
    <CarRentalProvider>
      <CustNavbar></CustNavbar>
      <Cars/>
    </CarRentalProvider>
  );

}
