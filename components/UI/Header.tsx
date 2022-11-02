import Logo from '@/images/logo.png';
import CircleLogo from '@/images/circle-logo.png';
import BarManu from '@/images/bar-menu.png';
import FoodMenu from '@/images/food-menu.png';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/Hook';
import { CategoryProps } from '../interfaces';
import { selectCategoriesState, selectIsMenuOpenState, setIsMenuOpenState } from 'store/categoriesSlice';
import Close from './icons/Close';

function Header() {

    const categoriesState = useAppSelector(selectCategoriesState);
    const isMenuOpenState = useAppSelector(selectIsMenuOpenState);

    const dispatch = useAppDispatch();

    const [isBarMenuOpenState, setIsBarMenuOpenState] = useState(false);
    const [isFoodMenuOpenState, setIsFoodMenuOpenState] = useState(false);

    const [barMenuCategoriesState, setBarMenuCategoriesState] = useState([]);
    const [foodMenuCategoriesState, setFoodMenuCategoriesState] = useState([]);

    useEffect(() => {
        const barMenuCategories = categoriesState.filter((category: CategoryProps) => category.menu !== 2);
        setBarMenuCategoriesState(barMenuCategories)
        const foodMenuCategories = categoriesState.filter((category: CategoryProps) => category.menu !== 1);
        setFoodMenuCategoriesState(foodMenuCategories)
    }, [categoriesState])

    const [isCircleLogo, setIsCircleLogo] = useState(false);

    function scrollEventFunction() {
        const isCircleLogo = window.scrollY >= 150;
        if (isCircleLogo) {
            localStorage.setItem('logoState', 'true')
            return setIsCircleLogo(true)
        }
        localStorage.setItem('logoState', 'false')
        setIsCircleLogo(false)
    }

    useEffect(() => {
        if (localStorage.getItem('logoState')) {
            const logoState = localStorage.getItem('logoState');
            setIsCircleLogo(!logoState)
        }

        window.addEventListener('scroll', scrollEventFunction)
        return () => window.removeEventListener('scroll', scrollEventFunction)
    }, [])

    return (
        <>
            <header className={styles.header}>
                <div
                    onClick={() => {
                        if (isMenuOpenState) {
                            setIsBarMenuOpenState(false)
                            setIsFoodMenuOpenState(false)
                            return dispatch(setIsMenuOpenState(false))
                        }
                        setIsBarMenuOpenState(true)
                        setIsFoodMenuOpenState(false)
                        dispatch(setIsMenuOpenState(true))
                    }}
                    className={styles.header_menuButton}
                >
                    {isBarMenuOpenState ? 
                        <Close size={60} />
                        : <Image src={BarManu} width={200} height={100} alt='' priority />}
                </div>
                <Link href={'/'}>
                    {isCircleLogo ? 
                        <div className={styles.header_circleLogo}>
                            <Image src={CircleLogo} width={175} height={150} alt='' priority />
                        </div>
                        : 
                        <div className={styles.header_logo}>
                            <Image src={Logo} width={550} height={100} alt='' priority />
                        </div>
                    }
                </Link>
                <div 
                    onClick={() => {
                        if (isMenuOpenState) {
                            setIsBarMenuOpenState(false)
                            setIsFoodMenuOpenState(false)
                            return dispatch(setIsMenuOpenState(false))
                        }
                        setIsBarMenuOpenState(false)
                        setIsFoodMenuOpenState(true)
                        dispatch(setIsMenuOpenState(true))
                    }}
                    className={styles.header_menuButton}
                >
                    {isFoodMenuOpenState ? 
                        <Close size={60} />
                        : <Image src={FoodMenu} width={200} height={100} alt='' priority />}
                </div>
            </header>
            <div className={isMenuOpenState ? `${styles.header_menu_active} ${styles.header_menu}` : styles.header_menu}>
                {isBarMenuOpenState ? 
                    barMenuCategoriesState.map((category: CategoryProps) => 
                        <div key={category.id}>{category.name}<br /><br /></div>
                    ) :
                    isFoodMenuOpenState ? 
                    foodMenuCategoriesState.map((category: CategoryProps) => 
                        <div key={category.id}>{category.name}<br /><br /></div>
                    ) :
                    <></>
                }
            </div>
        </>
    );
}

export default Header;