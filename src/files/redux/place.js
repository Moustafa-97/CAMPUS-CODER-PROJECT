import { createSlice } from "@reduxjs/toolkit";

const Place = createSlice({
  name: "place",
  initialState: {
    place: localStorage.getItem("place")
      ? JSON.parse(localStorage.getItem("place"))
      : "london",
  },
  reducers: {
    selectPlace: (state, action) => {
      state.place = action.payload;
      localStorage.setItem("place", JSON.stringify(action.payload));
    },
  },
});
export const { selectPlace } = Place.actions;
export default Place.reducer;
