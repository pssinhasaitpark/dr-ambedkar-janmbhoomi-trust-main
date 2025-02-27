    import { useMutation } from '@tanstack/react-query';
    import { useDispatch } from 'react-redux';
    import { setSubscribeLoading, setSubscribe, setSubscribeError, setStatusSucceeded, setStatusFailed } from '../../redux/slice/SubscribeSlice/SubscribeSlice'; 
    import axiosInstance from '../../redux/axios/axios';  
    // import { toast } from 'react-toastify'; 

    const useSubscribes = () => {
      const dispatch = useDispatch();

      const mutation = useMutation({
        mutationFn: async (subscribeData) => {
          const response = await axiosInstance.post('/newsletter',subscribeData); 
          return response.data;
        },
        onMutate: () => {
          dispatch(setSubscribeLoading()); 
        },
        onSuccess: (data) => {
          dispatch(setSubscribe(data.data)); 
          dispatch(setStatusSucceeded()); 
          // toast.success("Your Subscribe information has been submitted successfully!"); 
        },
        onError: (error) => {
          dispatch(setSubscribeError(error.message));
          dispatch(setStatusFailed()); 
          // toast.error("There was an error submitting your contact information.");
        },
      });

      return mutation;
    };

    export default useSubscribes;
