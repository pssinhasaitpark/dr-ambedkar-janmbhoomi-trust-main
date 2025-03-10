import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setListNews, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/NewsSlice/NewListSlice';

const useNewsLists = (id) => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ['lists', id], 
    queryFn: async () => {
      const response = await axiosInstance.get(`/news/get/${id}`);
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

export default useNewsLists;
