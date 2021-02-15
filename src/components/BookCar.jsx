import React, {useState, useContext, useEffect} from "react"

// import all the appropricate function
import {
  CarRentalContext,
  bookCar,
} from "../hire"


export default function BookCar(carToBeBooked) {

  // Initialize the hire content from the context provider
  const {hire, dispatch} = useContext(CarRentalContext);

  
  const handleBookCar = () => {
    bookCar(dispatch, carToBeBooked);
  }

  return(
    <button type="button" className="btn btn-sm btn-primary"
        onClick={handleBookCar}>Book</button>
    
  )
}