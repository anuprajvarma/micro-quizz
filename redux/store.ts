import { configureStore } from "@reduxjs/toolkit";
import ScoreSlice from "./slices/Score";
import QuestionSlice from "./slices/Questions";

export const store = configureStore({
  reducer: {
    Score: ScoreSlice,
    Questions: QuestionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
