import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/Hook';
import { selectFavoritesState, selectProductsState, setProductsState } from 'store/productsSlice';
import { ProductProps } from './interfaces';
import Product from './UI/Product';

function ProductList({ products, searchValue, productsFiltration }) {

    const productsState = useAppSelector(selectProductsState);
    const favoritesState = useAppSelector(selectFavoritesState);
    const dispatch = useAppDispatch();

    function filterProducts(searchQuery: string, products: Array<ProductProps>) {
        if (!searchQuery) {
            return products
        }

        return products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }

    useEffect(() => {
        const filteredProducts = filterProducts(searchValue, productsFiltration === 4 ? favoritesState : products);
        dispatch(setProductsState(filteredProducts))
    }, [searchValue.length])

    useEffect(() => {

        if (productsFiltration === 1) {
            dispatch(setProductsState(products))
        }

        if (productsFiltration === 2) {
            const productsByCheaperPrice = [];
            products.forEach((product: ProductProps) => productsByCheaperPrice.push(product))
            const filteredProductsByCheaperPrice = productsByCheaperPrice.sort((a: ProductProps, b: ProductProps) => a.price - b.price);
            dispatch(setProductsState(filteredProductsByCheaperPrice))
        }

        if (productsFiltration === 3) {
            const productsByExpensivePrice = [];
            products.forEach((product: ProductProps) => productsByExpensivePrice.push(product))
            const filteredProductsByExpensivePrice = productsByExpensivePrice.sort((a: ProductProps, b: ProductProps) => b.price - a.price);
            dispatch(setProductsState(filteredProductsByExpensivePrice))
        }

        if (productsFiltration === 4) {
            dispatch(setProductsState(favoritesState))
        }

    }, [productsFiltration])

    return (
        <>
            {productsState.map((product: ProductProps) => 
                <Product key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} />
            )}
        </>
    );
}

export default ProductList;