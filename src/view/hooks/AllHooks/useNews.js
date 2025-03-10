import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setListNews, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/NewsSlice/NewListSlice';

const useNews = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const response = await axiosInstance.get('/news');
      return response.data; 
    },
    onSettled: () => {
      dispatch(setLoading(false));  
    },
    onError: (error) => {
      dispatch(setError(error.message));  
      dispatch(setStatusFailed());  
    },
    onSuccess: (data) => {
      dispatch(setListNews(data.data));  
      dispatch(setStatusSucceeded()); 
    },
  });

  return { data: data?.data, isLoading, error };  
};

export default useNews;
