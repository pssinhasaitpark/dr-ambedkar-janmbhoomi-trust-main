import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import {setTestimonial,setTestimonialError,setTestimonialLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/TestimonialSlice/TestimonialSlice'; 
import axiosInstance from '../../redux/axios/axios';  
const useTestimonials = () => {
    const dispatch = useDispatch();
  
    const mutation = useMutation({
      mutationFn: async (formData) => {
        const response = await axiosInstance.post('/user/testimonials', formData, {
          headers: {
            'Content-Type': 'multipart/form-data', 
          },
        });
        return response.data;
      },
      onMutate: () => {
        dispatch(setTestimonialLoading());
      },
      onSuccess: (data) => {
        dispatch(setTestimonial(data.data));
        dispatch(setStatusSucceeded());
      
      },
      onError: (error) => {
        dispatch(setTestimonialError(error.message));
        dispatch(setStatusFailed());

      },
    });
  
    return mutation;
  };
  

export default useTestimonials;
