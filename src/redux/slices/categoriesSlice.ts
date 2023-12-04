import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';
import {axiosInstance} from '../../services/axiosInstance';

interface CategoriesState {
  loading: boolean;
  error: boolean;
  data: string[];
}

const initialState: CategoriesState = {
  loading: false,
  error: false,
  data: [],
};

export const fetchCategoryData = createAsyncThunk('getCategories', async () => {
  const res = await axiosInstance.get('getCategories');
  return res.data.data;
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // setData: (state, action: PayloadAction<string[]>) => {
    //   state.data = action.payload;
    // },
    // setLoading: (state, action: PayloadAction<boolean>) => {
    //   state.loading = action.payload;
    // },
    // setError: (state, action: PayloadAction<boolean>) => {
    //   state.error = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategoryData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoryData.rejected, state => {
        state.error = true;
        state.loading = false;
      });
  },
});

// export const {setData, setLoading, setError} = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories.data;
export default categoriesSlice.reducer;
