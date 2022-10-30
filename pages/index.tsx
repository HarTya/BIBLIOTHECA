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
import { useState } from 'react';

export default function HomePage() {

    const [isProductsNavigationOpen, setIsProductsNavigationOpen] = useState(false);
    const [productsFiltrationState, setProductsFiltrationState] = useState(1);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
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
                                <List size={40} />
                            </div> :
                            productsFiltrationState === 2 ? 
                            <div onClick={() => setProductsFiltrationState(3)}>
                                <PriceDown size={40} />
                            </div> :
                            productsFiltrationState === 3 ? 
                            <div onClick={() => setProductsFiltrationState(1)}>
                                <PriceUp size={40} />
                            </div> :
                            <div onClick={() => setProductsFiltrationState(1)}>
                                <StarList size={40} />
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
                            {productsFiltrationState === 4 ? <Close size={40} /> : <Star size={40} />}
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
                    {isSearchOpen ? <Close size={40} /> : <Search size={40} />}
                </div>
            </div>
            <div className={styles.homePage_products}>
                <ProductList />
            </div>
        </div>
    );
}