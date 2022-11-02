import Logo from '@/images/logo.png';
import CircleLogo from '@/images/circle-logo.png';
import BarManu from '@/images/bar-menu.png';
import FoodMenu from '@/images/food-menu.png';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Header() {

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
        <header className={styles.header}>
            <div className={styles.header_barMenu}>
                <Image src={BarManu} width={200} height={100} alt='' priority />
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
            <div className={styles.header_foodMenu}>
                <Image src={FoodMenu} width={200} height={100} alt='' priority />
            </div>
        </header>
    );
}

export default Header;