import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setBooks, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/BookSlice/BookSlice';

const useBooks = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await axiosInstance.get('/books');
      return response.data; 
    }
  });
  if (isLoading) {
    dispatch(setLoading());
  }

  if (error) {
    dispatch(setError(error.message));
    dispatch(setStatusFailed());
  }

  if (data) {
    dispatch(setBooks(data.data)); 
    dispatch(setStatusSucceeded());
  }

  return { data: data?.data, isLoading, error }; 
}

export default useBooks;
