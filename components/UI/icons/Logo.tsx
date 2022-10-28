import styles from '@/styles/Logo.module.scss';
import Link from 'next/link';

function Logo() {
    return (
        <Link href={'/'} className={styles.logo}>
            <div className={styles.logo_title}>BIBLIOTHECA</div>
            <div className={styles.logo_subtitle}>
                <span>DREAM LOCATION</span>
            </div>
        </Link>
    );
}

export default Logo;