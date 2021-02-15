import React, {useState, useContext, useEffect} from "react"

// import all the appropricate function
import {
  CarRentalContext,
  loadAllCars,
} from "../hire"

import BookCar from './BookCar.jsx'
import CustModal from './CustModal.jsx'

var toHex = require('colornames')

export default function Cars() {
  // Initialize the hire content from the context provider
  const {hire, dispatch} = useContext(CarRentalContext);
  // Cars stored in the context state data is defined in the initial state and reducer
  const {cars} = hire;

  const [selectedCarIndex, setSelectedCarIndex] = useState();

  useEffect(() => { loadAllCars(dispatch); }, []);

  const handleCancelBooking = () => {

  }

  const handleViewBooking = () => {

  }

  const handleReturnBookedCar = () => {

  }

  const handleUpdateBooking = () => {

  }

  return (
    <div className="container">
      <div className="cars m-4">
         <div className="row m-3 font-weight-bold text-center">
            <div className="col-2">Name</div>
            <div className="col-2">Type</div>
            <div className="col-2">Color</div>
            <div className="col-2">Fuel</div>
          </div>
        {cars.length !== 0 && ( cars.map((car, index) => (
          <div className="row m-3 text-center">
            <div className="col-2">{car.name}</div>
            <div className="col-2">{car.type}</div>
            <div className="col-2" >{car.color}
            <span style={{ background: toHex(car.color) }}></span>
            </div>
            <div className="col-2">{car.fuel}</div>
            <div className="col-2">
              {CustModal(<BookCar carToBeBooked={car}/>, 'Book')}
              {/* {CustModal(BookCar(car), 'Book')} */}


              {/* Working
              <CustModal ChildComponent={<BookCar carToBeBooked={car}/>} btnName={"Book"} /> */}

              {/*
              WORKING
              
              <CustModal btnName={"Book"}>
                <BookCar carToBeBooked={car}/>
              </CustModal> */}

              
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-sm btn-outline-primary" onClick={handleViewBooking}>View Booking</button>
            </div>
            {/* <div className="col-2">
              <button type="button" className="btn btn-sm btn-outline-primary" onClick={handleReturnBookedCar}>Return</button>
            </div> */}
            {/* <div className="col-2">
              <button type="button" className="btn btn-sm btn-outline-primary" onClick={handleUpdateBooking}>Update</button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleCancelBooking}>Cancel</button>
            </div> */}
          </div>
        )))}

      </div>

    </div>
  )

}