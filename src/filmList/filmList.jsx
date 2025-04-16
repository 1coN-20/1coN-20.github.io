import Main from '../pages/index';
import styles from '../styles/index.module.css';

export default function FilmList({ films }) {
    return (
        <>
            <ul className={styles.main_list_products}>
                {films.map((film, index) => (
                    <li key={index}>
                        <div className={styles.product_div1}>
                            <p className={styles.product_name}>{film.title}</p>
                            <div className={styles.product_div2}>
                                <img className={styles.product_img} src={film.img} alt={film.title} />
                                <p className={styles.product_description}>{film.type}</p>
                                <button className={styles.addCart}>Посмотреть</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}