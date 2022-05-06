import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  const result = await axios.get(
    "https://health-services-server.herokuapp.com/blogs"
  );
  return result.data;
});

const initialState = {
  blogList: [],
};
export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // all the actions
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogList = action.payload;
    });
  },
});

export default blogSlice.reducer;
