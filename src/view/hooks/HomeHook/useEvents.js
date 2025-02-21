import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setEvents, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/EventSlice/EventSlice';

const useEvents = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await axiosInstance.get('/events');
      return response.data; 
    }
  });

  console.log('sLoading:', isLoading);
  console.log('error:', error);
  console.log('data:', data);

  if (isLoading) {
    dispatch(setLoading());
  }

  if (error) {
    dispatch(setError(error.message));
    dispatch(setStatusFailed());
  }

  if (data) {
    dispatch(setEvents(data.data)); 
    dispatch(setStatusSucceeded());
  }

  return { data: data?.data, isLoading, error }; 
}

export default useEvents;
