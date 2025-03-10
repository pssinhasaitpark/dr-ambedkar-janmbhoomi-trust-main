import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios'; 
import { useDispatch } from 'react-redux';
import { setSocialMedia, setSocialMediaError, setSocialMediaLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/SubscribeSlice/SocialMediaSlice';

const useSocials = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ['socials'],
    queryFn: async () => {
      const response = await axiosInstance.get('/socialmedia');
      return response.data;
    },
  });

  if (isLoading) {
    dispatch(setSocialMediaLoading());
  }

  if (error) {
    dispatch(setSocialMediaError(error.message));
    dispatch(setStatusFailed());
  }

  if (data) {
    dispatch(setSocialMedia(data.data)); 
    dispatch(setStatusSucceeded());
  }

  return { data: data?.data, isLoading, error };
};

export default useSocials;
