import styles from '@/styles/Product.module.scss';

function Product({ img, name, price }) {
    return (
        <div className={styles.product}>{name}</div>
    );
}

export default Product;