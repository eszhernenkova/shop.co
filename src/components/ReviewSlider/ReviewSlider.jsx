import React, { useState } from 'react';

import styles from '../../styles/ReviewSlider.module.scss';

const ReviewSlider = ({ title }) => {

    const reviews =  [
        { id: 1, name: 'Sarah Jessica Parker', rating: 5, text: 'I am blown away by the quality and style of the clothes I received from Shop.co.' },
        { id: 2, name: 'Henry Cavill', rating: 4, text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.' },
        { id: 3, name: 'Anya Taylor-Joy', rating: 3, text: 'As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.' },
        { id: 4, name: 'Tom Hardy', rating: 5, text: 'I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.' },
        { id: 5, name: 'James McAvoy', rating: 4, text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.' }, 
    ];

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
        );
    };

    const renderStars = (rating) => {
        const fullStars = '★';
        const emptyStars = '☆';
        let stars = '';

        for (let i = 0; i < 5; i++) {
            stars += i < rating ? fullStars : emptyStars;
        }
        return <span className={styles.stars}>{stars}</span>;
    };

    const getDisplayedReviews = () => {
        const displayedReviews = [];
        for (let i = 0; i < 5; i++) {
        const reviewIndex = (currentIndex + i) % reviews.length;
        const isCurrentReview = i >= 1 && i <= 3; // отзывы по центру не размыты
        displayedReviews.push(
            <div
            key={reviews[reviewIndex].id}
            className={`${styles.review} ${isCurrentReview ? styles.active : styles.blurred}`}
            >
                <div className={styles.rating}>{renderStars(reviews[reviewIndex].rating)}</div>
                <h3 className={styles.name}>{reviews[reviewIndex].name}</h3>
                <p className={styles.text}>{reviews[reviewIndex].text}</p>
            </div>
        );
        }

        return displayedReviews;
    };

    

  return (
    <section className={styles.section}>
        <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.controls}>
                <button onClick={prevReview}>←</button>
                <button onClick={nextReview}>→</button>
            </div>
        </div>
    
        <div className={styles.slider}>
            <div className={styles.container}>{getDisplayedReviews()}</div>
        </div>
    </section>
  )
}

export default ReviewSlider;