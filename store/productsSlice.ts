import { ProductProps } from '@/components/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

interface ProductsState {
    productsState: Array<ProductProps>,
    favoritesState: Array<ProductProps>
}

const initialState: ProductsState = {
    productsState: [],
    favoritesState: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,

    reducers: {
        setProductsState(state, action) {
            state.productsState = action.payload;
        },
        setFavoritesState(state, action) {
            state.favoritesState = action.payload;
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.products,
            };
        }
    }

});

export const { setProductsState, setFavoritesState } = productsSlice.actions;

export const selectProductsState = (state: AppState) => state.products.productsState;

export const selectFavoritesState = (state: AppState) => state.products.favoritesState;

export default productsSlice.reducer;