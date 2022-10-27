import styles from '@/styles/Icon.module.scss';

export default function StarList({ size = 50, color = 'currentColor', ...props }) {
    return (
        <span className={styles.icon}>
            <p className={styles.icon_text}>По порядку (обране)</p>
            <svg width={size} height={size} fill={color} viewBox='0 0 24 24' {...props}>
                <path
                    fillRule='evenodd'
                    d='M7.92 16.68a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H8.52a.6.6 0 0 1-.6-.6Z'
                    clipRule='evenodd'
                />
                <path d='M4.61 5.513a.324.324 0 0 1 .62 0l.194.636a.326.326 0 0 0 .31.232h.661c.31 0 .444.4.197.592l-.562.436a.332.332 0 0 0-.113.36l.208.682c.094.308-.256.555-.508.36l-.5-.388a.32.32 0 0 0-.394 0l-.5.387c-.252.196-.6-.051-.508-.359l.208-.684a.332.332 0 0 0-.113-.358l-.561-.436c-.248-.192-.114-.592.196-.592h.66a.325.325 0 0 0 .311-.232l.195-.636Zm0 4.8a.324.324 0 0 1 .62 0l.194.636a.326.326 0 0 0 .31.232h.661c.31 0 .444.4.197.592l-.562.436a.332.332 0 0 0-.113.36l.208.682c.094.306-.256.555-.508.36l-.5-.388a.32.32 0 0 0-.394 0l-.5.387c-.252.196-.6-.051-.508-.359l.208-.684a.332.332 0 0 0-.113-.358l-.561-.436c-.248-.192-.114-.591.196-.591h.66a.325.325 0 0 0 .311-.233l.195-.636Zm0 4.8a.324.324 0 0 1 .62 0l.194.636a.326.326 0 0 0 .31.232h.661c.31 0 .444.4.197.592l-.562.436a.332.332 0 0 0-.113.36l.208.682c.094.307-.256.555-.508.36l-.5-.388a.32.32 0 0 0-.394 0l-.5.387c-.252.196-.6-.051-.508-.359l.208-.684a.332.332 0 0 0-.113-.358l-.561-.436c-.248-.192-.114-.591.196-.591h.66a.325.325 0 0 0 .311-.233l.195-.636Z' />
            </svg>
        </span>
    );
}