import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice';
import { createWrapper } from 'next-redux-wrapper';
import { categoriesSlice } from './categoriesSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            [productsSlice.name]: productsSlice.reducer,
            [categoriesSlice.name]: categoriesSlice.reducer
        },
        devTools: true
    })

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);