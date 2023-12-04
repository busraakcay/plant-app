import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface QuestionsState {
  loading: boolean;
  error: boolean;
  data: string[];
}

const initialState: QuestionsState = {
  loading: false,
  error: false,
  data: [],
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const {setData, setLoading, setError} = questionsSlice.actions;
export const selectQuestions = (state: RootState) => state.questions.data;
export default questionsSlice.reducer;
