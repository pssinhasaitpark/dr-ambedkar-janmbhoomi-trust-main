import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setGallerys, setError, setLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/GallerySlice/GallerySlice';

const useGallerys = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['gallerys'],
    queryFn: async () => {
      const response = await axiosInstance.get('/gallery');
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
    dispatch(setGallerys(data.data)); 
    dispatch(setStatusSucceeded());
  }

  return { data: data?.data, isLoading, error }; 
}

export default useGallerys;
