import styles from '@/styles/Icon.module.scss';

function Search({ text = false, size = 40, color = 'currentColor', disable = false, ...props }) {
    return (
        <span className={disable ? `${styles.icon} ${styles.icon_disable}` : styles.icon}>
            {text ? <p className={styles.icon_text}>Пошук</p> : <></>}
            <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...props}>
                <path d="M16.97 14.332a7.8 7.8 0 1 0-1.676 1.678h-.001c.036.048.074.094.117.138l4.62 4.62a1.2 1.2 0 0 0 1.698-1.697l-4.62-4.62a1.201 1.201 0 0 0-.138-.12v.001Zm.31-4.612a6.6 6.6 0 1 1-13.2 0 6.6 6.6 0 0 1 13.2 0Z" />
            </svg>
        </span>
    );
}

export default Search;