import {setData, setLoading, setError} from '../slices//questionsSlice';
import axios from 'axios';
import {AppDispatch} from '../store';

export const fetchQuestions = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
      const data = response.data;
      dispatch(setData(data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      console.error('Error fetching questions:', error);
    }
  };
  