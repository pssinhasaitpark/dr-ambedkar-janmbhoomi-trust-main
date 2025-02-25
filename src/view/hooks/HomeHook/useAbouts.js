import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setAbouts, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/AboutSlice/AboutSlice';

const useEvents = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['abouts'],
    queryFn: async () => {
      const response = await axiosInstance.get('/biography');
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
    dispatch(setAbouts(data.data)); 
    dispatch(setStatusSucceeded());
  }

  return { data: data?.data, isLoading, error }; 
}

export default useEvents;
