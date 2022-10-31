import prisma from 'lib/prisma';
import { GetStaticProps } from 'next';
import ProductList from '@/components/ProductList';
import Close from '@/components/UI/icons/Close';
import List from '@/components/UI/icons/List';
import PriceDown from '@/components/UI/icons/PriceDown';
import PriceUp from '@/components/UI/icons/PriceUp';
import Search from '@/components/UI/icons/Search';
import Star from '@/components/UI/icons/Star';
import StarList from '@/components/UI/icons/StarList';
import Input from '@/components/UI/Input';
import styles from '@/styles/HomePage.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store/Hook';
import { setFavoritesState } from 'store/productsSlice';

export const getStaticProps: GetStaticProps = async () => {
    const products = await prisma.product.findMany();
    
    return {
        props: { products }
    }
};

function HomePage({ products }) {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            const favoritesState = JSON.parse(localStorage.getItem('favorites'));
            dispatch(setFavoritesState(favoritesState))
        }
    }, [])

    const [isProductsNavigationOpen, setIsProductsNavigationOpen] = useState(false);
    const [productsFiltrationState, setProductsFiltrationState] = useState(1);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        if (isSearchOpen) {
            setProductsFiltrationState(productsFiltrationState === 4 ? 4 : 1)
        }
    }, [isSearchOpen])

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.homePage}>
            <div onClick={() => setIsProductsNavigationOpen(false)} className={styles.homePage_navigationBar_close}></div>
            <div
                onClick={
                    (e) => {
                        e.stopPropagation()
                        setIsProductsNavigationOpen(true)
                    }
                }
                onMouseOver={() => setIsProductsNavigationOpen(true)}
                onMouseLeave={() => setIsProductsNavigationOpen(false)}
                className={isProductsNavigationOpen
                    ? `${styles.homePage_navigationBar} ${styles.homePage_navigationBar_active}`
                    : styles.homePage_navigationBar
                }
            >
            </div>
            <div className={styles.homePage_filtrationBar}>
                {isSearchOpen ? <Input value={searchValue} setValue={setSearchValue} placeholder={'Пошук...'} type={'string'} autoFocus /> :
                    <>
                        {productsFiltrationState === 1 ? 
                            <div onClick={() => setProductsFiltrationState(2)}>
                                <List text size={40} />
                            </div> :
                            productsFiltrationState === 2 ? 
                            <div onClick={() => setProductsFiltrationState(3)}>
                                <PriceDown text size={40} />
                            </div> :
                            productsFiltrationState === 3 ? 
                            <div onClick={() => setProductsFiltrationState(1)}>
                                <PriceUp text size={40} />
                            </div> :
                            <div onClick={() => setProductsFiltrationState(1)}>
                                <StarList text size={40} />
                            </div>
                        }
                        <div 
                            onClick={
                                () => {
                                    if (productsFiltrationState === 4) {
                                        return setProductsFiltrationState(1)
                                    }
                                    return setProductsFiltrationState(4)
                                }
                            }
                        >
                            {productsFiltrationState === 4 ? <Close text size={40} /> : <Star text size={40} />}
                        </div>
                    </>
                }
                <div 
                    onClick={
                        () => {
                            if (isSearchOpen) {
                                setSearchValue('')
                                return setIsSearchOpen(false)
                            }
                            return setIsSearchOpen(true)
                        }
                    }
                >
                    {isSearchOpen ? <Close text size={40} /> : <Search text size={40} />}
                </div>
            </div>
            <div className={styles.homePage_products}>
                <ProductList products={products} searchValue={searchValue} productsFiltration={productsFiltrationState} />
            </div>
        </div>
    );
}

export default HomePage;