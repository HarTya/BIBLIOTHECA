import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

interface ProductsState {
    productsState: Array<object>
}

const initialState: ProductsState = {
    productsState: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setProductsState(state, action) {
            state.productsState = action.payload;
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.products,
            };
        },
    }

});

export const { setProductsState } = productsSlice.actions;

export const selectProductsState = (state: AppState) => state.products.productsState;

export default productsSlice.reducer;