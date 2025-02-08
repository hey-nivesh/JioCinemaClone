import React from 'react';
import styles from './Featured.module.css';
import FeaturedShow from './../featuredShow/FeaturedShow.jsx';
const Featured = (props) => {
    return (
        <>
            <section className={styles.featured}>
                <h1 className={styles.sectionTitle}>Hot Right Now 🔥</h1>
                <div className={styles.shows}>
                    {
                        props.movies.map((movie) => {
                            return <FeaturedShow key={movie.id} movie={movie} />;
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Featured;
