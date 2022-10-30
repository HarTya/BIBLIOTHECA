import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/Hook';
import { selectProductsState, setProductsState } from 'store/productsSlice';
import { ProductProps } from './interfaces';
import Product from './UI/Product';

function ProductList({ products }) {

    const productsState = useAppSelector(selectProductsState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setProductsState(products))
    }, [])

    return (
        <>
            {productsState.map((product: ProductProps) => 
                <Product key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} />
            )}
        </>
    );
}

export default ProductList;