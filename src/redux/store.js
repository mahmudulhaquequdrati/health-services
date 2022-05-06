import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import testimonialSlice from "./slices/testimonialSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    testimonials: testimonialSlice,
  },
});
