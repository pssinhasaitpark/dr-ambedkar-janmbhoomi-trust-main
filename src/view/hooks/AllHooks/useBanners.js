import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';  
import { useDispatch } from 'react-redux';
import {
  setBanners,
  setLoading,
  setStatusSucceeded,
  setStatusFailed,
  setError,
} from '../../redux/slice/HomeSlice/HomeSlice';

const fetchBanners = async () => {
  const response = await axiosInstance.get('/banner/getAll');
  return response.data.data; 
};

const useBanners = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useQuery({
    queryKey: ['banners'],  
    queryFn: fetchBanners,  
    onSuccess: (data) => {
      dispatch(setBanners(data));
      dispatch(setStatusSucceeded());
    },
    onError: (error) => {
      dispatch(setError(error.message));
      dispatch(setStatusFailed());
    },
    onSettled: () => {
      if (status === 'loading') {
        dispatch(setLoading());
      }
    },
  });

  return { data, status, error };
};

export default useBanners;
