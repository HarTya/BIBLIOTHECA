import styles from '@/styles/Icon.module.scss';

function Close({ size = 50, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            <p className={styles.icon_text}>Закрити</p>
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M19.505 4.975a.6.6 0 0 1 0 .85l-13.2 13.2a.6.6 0 0 1-.85-.85l13.2-13.2a.598.598 0 0 1 .85 0Z'
                    clipRule='evenodd'
                />
                <path
                    fillRule='evenodd'
                    d='M5.456 4.975a.6.6 0 0 0 0 .85l13.2 13.2a.6.6 0 1 0 .85-.85l-13.2-13.2a.6.6 0 0 0-.85 0Z'
                    clipRule='evenodd'
                />
            </svg>
        </span>
    );
}

export default Close;