import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAppointments = createAsyncThunk(
  "appointmentsData",
  async () => {
    const result = await axios.get(
      "https://health-services-server.herokuapp.com/appointments"
    );
    return result.data;
  }
);

const initialState = {
  appointmentsList: [],
};
export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    // all the actions
  },
  extraReducers: (builder) => {
    builder.addCase(getAppointments.fulfilled, (state, action) => {
      state.appointmentsList = action.payload;
    });
  },
});

export default appointmentSlice.reducer;
