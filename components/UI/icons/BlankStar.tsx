import styles from '@/styles/Icon.module.scss';

function BlankStar({ text = false, size = 40, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            {text ? <p className={styles.icon_text}>Не обране</p> : <></>}
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path d='M5.36 19.74c-.094.533.431.95.895.712l5.268-2.708 5.266 2.707c.464.238.99-.178.896-.71l-.996-5.676 4.226-4.027c.396-.377.192-1.066-.338-1.14l-5.878-.835-2.62-5.193a.615.615 0 0 0-1.113 0l-2.62 5.194-5.879.835c-.529.075-.734.763-.34 1.14l4.228 4.027-.996 5.676v-.002Zm5.885-3.32-4.423 2.272.833-4.748a.678.678 0 0 0-.196-.606l-3.487-3.324 4.863-.691a.63.63 0 0 0 .471-.346l2.214-4.39 2.217 4.39a.63.63 0 0 0 .471.346l4.863.69-3.488 3.324a.676.676 0 0 0-.195.607l.833 4.748-4.424-2.273a.603.603 0 0 0-.553 0h.001Z' />
            </svg>
        </span>
    );
}

export default BlankStar;