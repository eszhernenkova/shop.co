import React from 'react';

import styles from '../../styles/Products.module.scss'
import { Link } from 'react-router-dom';

const Products = ({ title, products = [], amount }) => {

    const list = Array.isArray(products) ? products.slice(0, amount) : [];
    const options = {
        style: 'currency',
        currency: 'USD'
    }

    // для рендеринга звездочек
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span 
                key={index} 
                style={{
                    color: index < rating ? '#FFD700' : '#ddd', // жёлтые звёзды до значения рейтинга, серые после
                    fontSize: '22px', 
                    marginRight: '2px' 
                }}
            >
                ★
            </span>
        ));
    };

  return (
    <section className={styles.products}>
        {title && <h2 className={styles.title}>{title}</h2> }
        <div className={styles.list}>
            {list.map(({ id, image, title, price, rating }) =>(
                <Link to={`${id}`} key={id} className={styles.product}>
                    <div className={styles.image} 
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    <div className={styles.wrapper}>
                        <h3 className={styles.subtitle}>{title}</h3>
                        <div className={styles.score}>
                                {renderStars(rating?.rate)}
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
        <button>View All</button>
        <hr />
    </section>
    
  )
}

export default Products;