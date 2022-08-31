import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { routerMiddleware } from 'react-router-redux';
import history from '../router/history';

import rootReducer from "./reducers";

const store = configureStore({ 
    reducer: rootReducer ,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
