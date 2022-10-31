import styles from '@/styles/Input.module.scss';
import { InputProps } from '../interfaces';

function Input({ value, setValue, placeholder = 'placeholder', type = 'string', ...props }: InputProps) {
    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.input}
            placeholder={placeholder}
            type={type}
            {...props}
        />
    );
}

export default Input;