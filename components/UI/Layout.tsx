import Header from '@/components/UI/Header';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/Hook';
import { setFavoritesState } from 'store/productsSlice';

function Layout({ children }) {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            const favoritesState = JSON.parse(localStorage.getItem('favorites'));
            dispatch(setFavoritesState(favoritesState))
        }
    }, [])

    return (
        <div id='wrapper'>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;