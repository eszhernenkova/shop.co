import React from 'react';

import styles from '../../styles/Home.module.scss';

import BG from '../../images/BG.png';


const Poster = () => {
  return (
    <section className={styles.home}>
        
        <div className={styles.product}>
            
            <div className={styles.text}>
                <div className={styles.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</div>
                <div className={styles.subtitle}>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </div>
                <button className={styles.button}>Shop Now</button>
                <div className={styles.reviews}>
                    <div className={styles.review}>
                        <h3>200+</h3>
                        <p>International Brands</p>
                    </div>
                    <div className={styles.review}>
                        <h3>2,000+</h3>
                        <p>High-Quality Products</p>
                    </div>
                    <div className={styles.review}>
                        <h3>30,000+</h3>
                        <p>Happy Customers</p>
                    </div>
            </div>
            </div>
            
            <div className={styles.image}>
                <img src={BG} />
            </div>
        </div>
    </section>
  )
}

export default Poster