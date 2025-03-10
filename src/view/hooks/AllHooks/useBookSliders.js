import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setBookSliders, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/BookSlice/BookSliderSlice';

const fetchBookSliders = async () => {
  const response = await axiosInstance.get('/booklist');
  return response.data;
};

const useBookSliders = () => {
  
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['booksliders'],
    queryFn: fetchBookSliders,
    onSuccess: (data) => {
      const bookCovers = data.data.map((book) => book.cover_image);
      dispatch(setBookSliders(bookCovers));  
      dispatch(setStatusSucceeded());
    },
    onError: (error) => {
      dispatch(setError(error.message));
      dispatch(setStatusFailed());
    },
  });

  if (isLoading) {
    dispatch(setLoading());
  }
  return { data: data?.data, isLoading, error };
};

export default useBookSliders;
