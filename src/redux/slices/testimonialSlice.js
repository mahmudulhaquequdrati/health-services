import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTestimonials = createAsyncThunk(
  "testimonialsData",
  async () => {
    const result = await axios.get(
      "https://health-services-server-iota.vercel.app/reviews"
    );
    return result.data;
  }
);

const initialState = {
  testimonialsList: [],
};
export const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    // all the actions
  },
  extraReducers: (builder) => {
    builder.addCase(getTestimonials.fulfilled, (state, action) => {
      state.testimonialsList = action.payload;
    });
  },
});

export default testimonialSlice.reducer;
