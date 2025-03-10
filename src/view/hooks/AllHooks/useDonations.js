import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setDonations, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/DonationSlice/DonationSlice';

const useDonations = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['donations'],
    queryFn: async () => {
      const response = await axiosInstance.get('/donation');
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
    dispatch(setDonations(data.data)); 
    dispatch(setStatusSucceeded());
  }

  return { data: data?.data, isLoading, error }; 
}

export default  useDonations;
