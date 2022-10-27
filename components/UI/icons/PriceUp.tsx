import styles from '@/styles/Icon.module.scss';

export default function PriceUp({ size = 50, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            <p className={styles.icon_text}>Дорожче</p>
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M12.056 7.496a.6.6 0 0 1 .85 0l7.2 7.2a.6.6 0 1 1-.85.85L12.48 8.768l-6.775 6.776a.6.6 0 1 1-.85-.85l7.2-7.2Z'
                    clipRule='evenodd'
                />
            </svg>
        </span>
    );
}