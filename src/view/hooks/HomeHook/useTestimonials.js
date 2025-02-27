import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import {setTestimonial,setTestimonialError,setTestimonialLoading, setStatusSucceeded, setStatusFailed } from '../../redux/slice/TestimonialSlice/TestimonialSlice'; 
import axiosInstance from '../../redux/axios/axios';  
import { toast } from 'react-toastify'; 
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
        toast.success('Testimonial submitted successfully!');
      },
      onError: (error) => {
        dispatch(setTestimonialError(error.message));
        dispatch(setStatusFailed());
        toast.error('There was an error submitting the testimonial.');
      },
    });
  
    return mutation;
  };
  

export default useTestimonials;
