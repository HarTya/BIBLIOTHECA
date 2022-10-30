import styles from '@/styles/Product.module.scss';
import { ProductProps } from '../interfaces';
import BlankStar from './icons/BlankStar';

function Product({ id, image, name, price }: ProductProps) {
    return (
        <div className={styles.product}>
            <div className={styles.product_img}>
                <img src={image} alt='Картинка продукта' />
            </div>
            <div className={styles.product_content}>
                <div>
                    <span>{name}</span>
                    <p>{price} ₴</p>
                </div>
                <BlankStar size={40} />
            </div>
        </div>
    );
}

export default Product;