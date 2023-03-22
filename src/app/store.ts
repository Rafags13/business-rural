import { configureStore, Action } from '@reduxjs/toolkit';
import purchaseReducer from '../features/purchase/purchaseSlice';

export const store = configureStore({
    reducer: { purchase: purchaseReducer }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;