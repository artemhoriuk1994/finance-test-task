import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickers: [
    {
      company_name: "Apple",
      ticker: "AAPL",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
      isPriceChanged: null,
      isToggled: false,
    },
    {
      company_name: "Google",
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
      isPriceChanged: null,
      isToggled: false,
    },
    {
      company_name: "Microsoft",
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
      isPriceChanged: null,
      isToggled: false,
    },
    {
      company_name: "Amazon",
      ticker: "AMZN",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
      isPriceChanged: null,
      isToggled: false,
    },
    {
      company_name: "Facebook",
      ticker: "FB",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
      isPriceChanged: null,
      isToggled: false,
    },
    {
      company_name: "Tesla",
      ticker: "TSLA",
      exchange: "NASDAQ",
      price: "",
      change: "",
      change_percent: "",
      dividend: "",
      yield: "",
      last_trade_time: Date(),
      isPriceChanged: null,
      isToggled: false,
    },
  ],
}

export const setCurrentPrice = createAsyncThunk(
  "tickers/setCurrentPrice",
  async (tickers) => {
    console.log(tickers)
    const updatedTickers = initialState.tickers.map((ticker) => {
      const matchingTicker = tickers.find((t) => t.ticker === ticker.ticker);
      if (matchingTicker) {
        return { ...ticker, ...matchingTicker };
      }
      return ticker;
    });
    return { tickers: updatedTickers };
  }
);
// export const onToggle = createAsyncThunk(
//   'tickers/setToggle',
//   async (index) => {
//     const toggledTicker = {
//       ...initialState.tickers[index],
//       isToggled: !initialState.tickers[index].isToggled
//     };
//     const newTickers = [
//       ...initialState.tickers.slice(0, index),
//       toggledTicker,
//       ...initialState.tickers.slice(index + 1)
//     ];
//     return newTickers;
//   }
// );





export const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCurrentPrice.fulfilled, (_, { payload }) => {
      return payload;
    })
      .addCase(setCurrentPrice.rejected, (_, { error }) => {
        console.error(error);
      })
  },
});
export default tickersSlice.reducer;
