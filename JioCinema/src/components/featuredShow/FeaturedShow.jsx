import React from 'react';
import styles from './FeaturedShow.module.css';
import Featuredimg1 from '../../assets/images/Featured1.png';
import Featuredimg2 from '../../assets/images/Featured2.png';
import Featuredimg3 from '../../assets/images/Featured3.png';
import Featuredimg4 from '../../assets/images/Featured4.png';

const FeaturedShow = (props) => {
  return (
    <>
      <div className={styles.featuerShow}>

        <img className={styles.Featuredimage} src={props.movie.image_url} alt="poster" />
        <div className={styles.movieTitle}>
            {props.movie.name}
        </div>
      </div>
    </>
  )
}

export default FeaturedShow;
