import styles from '@/styles/Product.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/Hook';
import { selectFavoritesState, setFavoritesState } from 'store/productsSlice';
import { ProductProps } from '../interfaces';
import BlankStar from './icons/BlankStar';
import Star from './icons/Star';

function Product({ id, image, name, price, alternativeProposal, description, caption, country, categoryId }: ProductProps) {

    const favoritesState = useAppSelector(selectFavoritesState);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useAppDispatch();

    const manageFavorite = () => {
        const favoriteProduct = {
            id,
            image,
            name,
            price
        };

        let isFavoriteProductAlreadyExist = false;

        favoritesState.forEach(product => {
            if (product.id === id) {
                isFavoriteProductAlreadyExist = true;
            } 
        })

        if (isFavoriteProductAlreadyExist) {
            const updatedFavoritesState = favoritesState.filter(product => product.id !== id);
            return dispatch(setFavoritesState(updatedFavoritesState))
        }

        dispatch(setFavoritesState([...favoritesState, favoriteProduct]))
    };

    useEffect(() => {
        setIsFavorite(false)
        favoritesState.forEach(product => {
            if (product.id === id) {
                setIsFavorite(true)
            }
        })
        localStorage.setItem('favorites', JSON.stringify(favoritesState))
    }, [favoritesState])

    return (
        <div className={styles.product}>
            <div className={styles.product_img}>
                <img src={image} alt='Картинка продукта' />
            </div>
            <div className={styles.product_content}>
                <div>
                    <span>{name}</span>
                    <p>{price} ₴</p>
                </div>
                <span onClick={() => manageFavorite()}>
                    {isFavorite ? <Star /> : <BlankStar />}
                </span>
            </div>
        </div>
    );
}

export default Product;