import React from 'react';
import styles from './ShowElement.module.css';
const ShowElement = (props) => {
    return (
        <>
            <div className={styles.show}>
                <img src={props.movie.image_url} alt="poster" />
                <div className={styles.movieTitle}>
                    {props.movie.name}
                </div>
            </div>
        </>
    )
}

export default ShowElement;