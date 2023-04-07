import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPrice } from "./redux/slice/tickerSlice";
import { ThemeProvider } from "@mui/material";
import { MAIN_THEME } from './styles/theme/theme'
import Header from "./components/Header/Header";
import TableBodyData from "./components/Table/TableBodyData";
import CardList from "./components/CardList/CardList";
import DataUpdateTimer from "./components/DataUpdateTimer/DataUpdateTimer";

const ENDPOINT = 'http://localhost:4000';

function App() {
  const [updateInterval, setUpdateInterval] = useState(5000);
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.tickers.tickers);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.emit('start', updateInterval);

    socket.on('ticker', (quotes) => {
      dispatch(setCurrentPrice(quotes));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, updateInterval]);

  const handleChangeUpdateTimer = (value) => {
    setUpdateInterval(value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={MAIN_THEME}>
        <Header />
        <CardList tickers={tickers} />
        <DataUpdateTimer onHandleChange={handleChangeUpdateTimer} />
        <TableBodyData tickers={tickers} />
      </ThemeProvider>
    </div>
  );
}

export default App;
