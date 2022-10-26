import styles from '@/styles/Logo.module.scss';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href={'/'} className={styles.logo}>
            <div className={styles.logo_title}>BIBLIOTHECA</div>
            <div className={styles.logo_subtitle}>
                <span>DREAM LOCATION</span>
            </div>
        </Link>
    );
}