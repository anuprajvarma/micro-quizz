import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const ScoreSlice = createSlice({
  name: "Score",
  initialState,
  reducers: {
    setScore(state, action) {
      const newScore = state + action.payload;
      console.log("Setting score:", newScore);
      return newScore;
    },
  },
});

export const { setScore } = ScoreSlice.actions;
export default ScoreSlice.reducer;
