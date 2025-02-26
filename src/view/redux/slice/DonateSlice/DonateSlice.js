    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    data: null,
    status: 'idle',
    error: null,
    };

    const DonateSlice = createSlice({
    name: 'donate',
    initialState,
    reducers: {
        setDonate: (state, action) => {
        state.data = action.payload;
        },
        setDonateError: (state, action) => {
        state.error = action.payload;
        },
        setDonateLoading: (state) => {
        state.status = 'loading';
        },
        setStatusSucceeded: (state) => {
        state.status = 'succeeded';
        },
        setStatusFailed: (state) => {
        state.status = 'failed';
        },
    },
    });

    export const { setDonate, setDonateError, setDonateLoading, setStatusSucceeded, setStatusFailed } = DonateSlice.actions;

    export default DonateSlice.reducer;
