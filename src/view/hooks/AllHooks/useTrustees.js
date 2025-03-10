import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../redux/axios/axios';
import { useDispatch } from 'react-redux';
import { setTrustees, setTrusteeError, setStatusSucceeded, setStatusFailed } from '../../../view/redux/slice/TrusteeSlice/TrusteeSlice';

const useTrustees = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery({
    queryKey: ['trustee'],
    queryFn: async () => {
      const response = await axiosInstance.get('/user/trustee');
      return response.data.data.map(trustee => ({
        full_name: trustee.full_name,
        image: trustee.image,
        designations: trustee.designations,
      }));
    }
  });

  if (isLoading) {
    dispatch(setStatusSucceeded());  
  }

  if (error) {
    dispatch(setTrusteeError(error.message));
    dispatch(setStatusFailed());
  }

  if (data) {
    dispatch(setTrustees(data)); 
    dispatch(setStatusSucceeded());
  }

  return { data, isLoading, error };
};

export default useTrustees;
