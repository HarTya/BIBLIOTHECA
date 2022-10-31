import styles from '@/styles/Icon.module.scss';

function PriceDown({ text = false, size = 50, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            {text ? <p className={styles.icon_text}>Дешевше</p> : <></>}
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M4.855 7.496a.6.6 0 0 1 .85 0l6.775 6.776 6.775-6.776a.6.6 0 0 1 .85.85l-7.2 7.2a.6.6 0 0 1-.85 0l-7.2-7.2a.6.6 0 0 1 0-.85Z'
                    clipRule='evenodd'
                />
            </svg>
        </span>
    );
}

export default PriceDown;