import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setDonateLoading, setDonate, setDonateError, setStatusSucceeded, setStatusFailed } from '../../redux/slice/DonateSlice/DonateSlice'; 
import axiosInstance from '../../redux/axios/axios';  
import { toast } from 'react-toastify'; 

const useDonates = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post('/collection', formData); 
      return response.data;
    },
    onMutate: () => {
      dispatch(setDonateLoading());
    },
    onSuccess: (data) => {
      dispatch(setDonate(data.data));
      dispatch(setStatusSucceeded()); 
      toast.success("Donation successful!"); 
    },
    onError: (error) => {
      dispatch(setDonateError(error.message)); 
      dispatch(setStatusFailed()); 
      toast.error("There was an error submitting your donation."); 
    },
  });

  return mutation;
};

export default useDonates;
