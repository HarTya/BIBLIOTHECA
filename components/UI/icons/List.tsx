import styles from '@/styles/Icon.module.scss';

function List({ text = false, size = 40, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            {text ? <p className={styles.icon_text}>Всі</p> : <></>}
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M7.92 16.68a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm-3.6 1.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm0 4.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm0 4.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
                    clipRule='evenodd'
                />
            </svg>
        </span>
    );
}

export default List;