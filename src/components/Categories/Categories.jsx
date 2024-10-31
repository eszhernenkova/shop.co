import React from 'react';

import styles from '../../styles/Categories.module.scss';
import { Link } from 'react-router-dom';

import men from '../../images/men.png';
import woman from '../../images/woman.png';
import jewelery from '../../images/jewelery.jpg';



const Categories = ({ title, categories = [], amount, products = [] }) => {
    const list = Array.isArray(categories) 
        ? categories.filter(category => category !== "electronics").slice(0, amount)
        : [];
    
    const categoryImages  = {
        "jewelery": jewelery, 
        "men's clothing": men,
        "women's clothing": woman,
    };

  return (
    <section className={styles.section}>
            <h2>{title}</h2>
            <div className={styles.list}>
                {list.map((category, index) => {
                    // Находим первый продукт, который соответствует текущей категории
                    const imageUrl = categoryImages[category];

                    return (
                        <Link to={`/categories`} key={index} className={styles.item}>
                            <div
                                className={styles.image}
                                style={{
                                    backgroundImage: `url(${imageUrl})`
                                }}
                            >
                                <h3 className={styles.title}>
                                    {typeof category === 'string' ? category : category.name}
                                </h3>
                            </div>
                            
                        </Link>
                    );
                })}
            </div>
        </section>
  )
}

export default Categories;