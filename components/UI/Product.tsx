import styles from '@/styles/Product.module.scss';
import BlankStar from './icons/BlankStar';

function Product({ img, name, price }) {
    return (
        <div className={styles.product}>
            <img src={img} alt='Картинка продукта' />
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