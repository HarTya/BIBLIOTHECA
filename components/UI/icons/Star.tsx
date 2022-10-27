import styles from '@/styles/Icon.module.scss';

export default function Star({ size = 50, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            <p className={styles.icon_text}>Обране</p>
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path d='M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z' />
            </svg>
        </span>
    );
}