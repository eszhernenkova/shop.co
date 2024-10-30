import React from 'react';

import styles from '../../styles/Products.module.scss'
import { Link } from 'react-router-dom';

const Products = ({ title, products = [], amount }) => {

    const list = Array.isArray(products) ? products.slice(0, amount) : [];
    const options = {
        style: 'currency',
        currency: 'USD'
    }

    const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;
    const rating = generateRandomRating();

    // для рендеринга звездочек
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span 
                key={index} 
                style={{
                    color: index < rating ? '#FFD700' : '#ddd', // жёлтые звёзды до значения рейтинга, серые после
                    fontSize: '20px', 
                    marginRight: '2px' 
                }}
            >
                ★
            </span>
        ));
    };

  return (
    <section className={styles.products}>
        {title && <h2>{title}</h2> }
        <div className={styles.list}>
            {list.map(({ id, image, title, price }) =>(
                <Link to={`${id}`} key={id} className={styles.product}>
                    <div className={styles.image} 
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.score}>
                                {renderStars(rating)}
                            </div>  
                        <div className={styles.info}>           
                            <div className={styles.price}>{new Intl.NumberFormat('en-US', options).format(price)}</div>
                            <div className={styles.oldPrice}>
                                {new Intl.NumberFormat('en-US', options).format(Math.floor(price * 0.9))}
                            </div>

                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Products;