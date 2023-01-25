import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAppointments = createAsyncThunk(
  "appointmentsData",
  async () => {
    const result = await axios.get(
      "https://health-server.vercel.app/appointments"
    );
    return result.data;
  }
);

export const postAppointment = createAsyncThunk(
  "postAppointment",
  async (newData) => {
    await axios
      .post("https://health-server.vercel.app/appointments", newData.newData)
      .then((res) => {
        if (res.data.insertedId) {
          newData.handleClose();
        }
      });
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
