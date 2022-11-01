import Logo from '@/images/logo.png';
import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.header_logo}>
                <Image src={Logo} width={550} height={100} alt=''
                    sizes='(max-width: 575px) 100vw'
                />
            </Link>
        </header>
    );
}

export default Header;