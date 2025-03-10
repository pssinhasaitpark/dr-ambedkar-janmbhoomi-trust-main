    import { useMutation } from '@tanstack/react-query';
    import { useDispatch } from 'react-redux';
    import { setSubscribeLoading, setSubscribe, setSubscribeError, setStatusSucceeded, setStatusFailed } from '../../redux/slice/SubscribeSlice/SubscribeSlice'; 
    import axiosInstance from '../../redux/axios/axios';  

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
        
        },
        onError: (error) => {
          dispatch(setSubscribeError(error.message));
          dispatch(setStatusFailed()); 
 
        },
      });

      return mutation;
    };

    export default useSubscribes;
