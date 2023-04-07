import tickersReducer from "../slice/tickerSlice";
import {
    combineReducers
} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  tickers: tickersReducer,
});

export default rootReducer