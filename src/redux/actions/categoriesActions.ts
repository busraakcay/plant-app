import {setData, setLoading, setError} from '../slices/categoriesSlice';
import axios from 'axios';
import {AppDispatch} from '../store';

export const fetchCategories = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getCategories');
      const data = response.data.data;
      dispatch(setData(data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      console.error('Error fetching categories:', error);
    }
  };
  