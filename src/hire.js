import React, {useState, useContext, useReducer} from 'react'
import axios from 'axios'

export const initialState = {
  loggedInUser: 'Guest',
  cars: [],
  bookedCars: [],
}

const BOOK_CAR = "BOOK_CAR";
const RETURN_CAR = "RETURN_CAR";
const LOAD_CARS = "LOAD_CARS";
const SELECT_CAR = "SELECT_CAR";
const CANCEL_BOOKING = "CANCEL_BOOKING";
const UPDATE_BOOKING = "UPDATE_BOOKING";

export function carRentalReducer(state, action){
  switch(action.type){
    case BOOK_CAR:
      return { ...state, bookedCars: [...state.bookedCars, action.payload.carBooked]};

    case CANCEL_BOOKING:
      let bookedCars = state.filter((_car, i) => action.payload.carCancelled.id !== _car.id);
      return {...state, bookedCars};

    case UPDATE_BOOKING:
      return {};

    case RETURN_CAR:
      return {};

    case LOAD_CARS:
      return { ...state, cars: action.payload.cars};

    case SELECT_CAR:
      return {};
    default:
        return state;
  }
}

// The following action-generating functions are commonly referred to
// as "action creators". They accept any input relevant to the action,
// and return an object that represents that action, which is typically
// passed to the dispatch function. Actions always contain a type attribute
// used to identify the action and tell the reducer what logic to run.

export function loadAllCarsAction(cars) {
  return {
    type: LOAD_CARS,
    payload: {
      cars
    }
  }
}


export function bookCarAction(carBooked, bookingData) {
  return {
    type: BOOK_CAR,
    payload:{
      carBooked
    }
  }
}

export function cancelCarBookAction(carCancelled) {
  return {
    type: CANCEL_BOOKING,
    payload:{
      carCancelled
    }
  }
}


/****************************
 ****************************
 ***  Provider Code
 ****************************
 **************************** 
 */

  // export the whole context
 export const CarRentalContext = React.createContext(null);

 // create the provider to use below
 const {Provider} = CarRentalContext;

// Export a provider HOC that contains the initalized reducer
// Pass the reducer as context to the children
// Any child component will be able to alter the state of the app
export function CarRentalProvider({children}) {

  // create the dispatch function in one place and put in into context
  // where it will be accessible to all of the children
  const [hire, dispatch] = useReducer(carRentalReducer, initialState);

  // surround the children elements with
  // the context provider we created above
  return (<Provider value={{hire, dispatch}}>
      {children}
    </Provider>)
}



/* ********************************
 * ********************************
 * ********************************
 * ********************************
 *        Requests
 * ********************************
 * ********************************
 * ********************************
 * ********************************
 */

// In this section we extract out the
// code that makes requests to the backend
//
// these functions must be passed the dispatch from the current context

// place the hard coded backend URL in this file only
const BACKEND_URL = 'http://localhost:3004';

export function loadAllCars(dispatch){
  axios.get(BACKEND_URL + '/cars').then((result) =>{
    dispatch(loadAllCarsAction(result.data.cars))
  })
}

export function bookCar(dispatch, car) {
  let startDate = new Date();
  startDate.setDate(startDate.getDate() + 3 );
  const carData = {
    booker_id: 2,
    car_id: car.Id,
    booking_date: new Date(),
    start_date: startDate,
    end_date: startDate.setDate(startDate.getDate() + 3 ),
  }
  axios.post(BACKEND_URL + '/book/' + car.id, carData).then((result) =>{
    dispatch(bookCarAction(car, result.data.bookingData));
  })
}
