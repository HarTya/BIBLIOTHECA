import prisma from 'lib/prisma';
import { GetServerSideProps } from 'next';
import ProductList from '@/components/ProductList';
import Close from '@/components/UI/icons/Close';
import List from '@/components/UI/icons/List';
import PriceDown from '@/components/UI/icons/PriceDown';
import PriceUp from '@/components/UI/icons/PriceUp';
import Search from '@/components/UI/icons/Search';
import Star from '@/components/UI/icons/Star';
import StarList from '@/components/UI/icons/StarList';
import Input from '@/components/UI/Input';
import styles from '@/styles/CategoryPage.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store/Hook';
import { setCategoriesState } from 'store/categoriesSlice';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const products = await prisma.product.findMany({
        where: { categoryId: String(params.id) }
    });
    const categories = await prisma.category.findMany();

    return {
        props: { products, categories }
    }
};

function CategoryPage({ products, categories }) {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCategoriesState(categories))
    }, [])

    const [productsFiltrationState, setProductsFiltrationState] = useState(1);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        if (isSearchOpen) {
            setProductsFiltrationState(productsFiltrationState === 4 ? 4 : 1)
        }
    }, [isSearchOpen])

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={styles.categoryPage}>
            <div className={styles.categoryPage_filtrationBar}>
                {isSearchOpen ? 
                    <div className={styles.categoryPage_filtrationBar_search}>
                        <Search disable={!searchValue.trim()} />
                        <Input value={searchValue} setValue={setSearchValue} placeholder={'Пошук'} autoFocus />
                    </div> :
                    <>
                        {productsFiltrationState === 1 ? 
                            <div onClick={() => setProductsFiltrationState(2)}>
                                <List text />
                            </div> :
                            productsFiltrationState === 2 ? 
                            <div onClick={() => setProductsFiltrationState(3)}>
                                <PriceDown text />
                            </div> :
                            productsFiltrationState === 3 ? 
                            <div onClick={() => setProductsFiltrationState(1)}>
                                <PriceUp text />
                            </div> :
                            <div onClick={() => setProductsFiltrationState(1)}>
                                <StarList text />
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
                            {productsFiltrationState === 4 ? <Close /> : <Star text />}
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
                    {isSearchOpen ? <Close /> : <Search text />}
                </div>
            </div>
            <div className={styles.categoryPage_products}>
                <ProductList products={products} searchValue={searchValue} productsFiltration={productsFiltrationState} />
            </div>
        </div>
    );
}

export default CategoryPage;