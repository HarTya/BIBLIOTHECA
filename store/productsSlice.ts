import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

interface ProductsState {
    productsState: Array<object>
}

const initialState: ProductsState = {
    productsState: [
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/267px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
            name: 'Американо',
            price: 200
        },
        {
            id: 2,
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Espresso_and_napolitains.jpg',
            name: 'Эспрессо',
            price: 300
        },
        {
            id: 3,
            img: 'https://img-fotki.yandex.ru/get/15552/29993302.36f/0_a41c2_7a39ab57_orig.jpg',
            name: 'Нигер',
            price: 1
        },
        {
            id: 4,
            img: 'https://coffeemania.ru/uploads/p264/ec59512691ea22f.jpg',
            name: 'Капучино',
            price: 350
        },
        {
            id: 5,
            img: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg',
            name: 'Латте',
            price: 250
        },
    ]
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
            console.log('HYDRATE', action.payload);
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