import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import {  setBookdetails, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/BookSlice/BookListSlice';

const useNewsLists = (id) => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ['booklists', id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/booklist/${id}`);
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
      dispatch(setBookdetails(data.data));
      dispatch(setStatusSucceeded());
    },
  });

  return { data: data?.data, isLoading, error };
};

export default useNewsLists;
