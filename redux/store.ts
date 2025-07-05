import { configureStore } from "@reduxjs/toolkit";
import ScoreSlice from "./slices/Score";

export const store = configureStore({
  reducer: {
    Score: ScoreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
