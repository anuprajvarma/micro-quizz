import { createSlice } from "@reduxjs/toolkit";

interface questionType {
  id: string;
  question: string;
  options: string[];
  answer: string;
}

const initialState: questionType[] = [];

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions(state, actions) {
      console.log(
        "Setting questions:",
        actions.payload + "\nCurrent state:",
        state
      );
      return actions.payload;
    },
  },
});

export const { setQuestions } = questionSlice.actions;
export default questionSlice.reducer;
