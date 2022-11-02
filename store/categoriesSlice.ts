import { CategoryProps } from '@/components/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from './store';

interface CategoriesState {
    categoriesState: Array<CategoryProps>,
    isMenuOpenState: boolean
}

const initialState: CategoriesState = {
    categoriesState: [],
    isMenuOpenState: false
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,

    reducers: {
        setCategoriesState(state, action) {
            state.categoriesState = action.payload;
        },
        setIsMenuOpenState(state, action) {
            state.isMenuOpenState = action.payload;
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.categories,
            };
        }
    }

});

export const { setCategoriesState, setIsMenuOpenState } = categoriesSlice.actions;

export const selectCategoriesState = (state: AppState) => state.categories.categoriesState;

export const selectIsMenuOpenState = (state: AppState) => state.categories.isMenuOpenState;

export default categoriesSlice.reducer;