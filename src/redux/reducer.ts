import {combineReducers} from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import questionsReducer from './slices/questionsSlice';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  questions: questionsReducer,
});
