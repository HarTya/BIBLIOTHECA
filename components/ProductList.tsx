import { useAppSelector } from 'store/Hook';
import { selectProductsState } from 'store/productsSlice';
import { ProductProps } from './interfaces';
import Product from './UI/Product';

function ProductList() {

    const productsState = useAppSelector(selectProductsState);

    return (
        <>
            {productsState.map((product: ProductProps) => 
                <Product key={product.id} img={product.img} name={product.name} price={product.price} />
            )}
        </>
    );
}

export default ProductList;