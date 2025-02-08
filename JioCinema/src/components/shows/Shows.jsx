import React from 'react';
import styles from './Shows.module.css';
import ShowElement from '../show/ShowElement';
const Shows = (props) => {
  return (
    <>
    <section className={styles.shows}>
        <h1>{props.title}</h1>
        <div className={styles.showsParent}>
            {
              props.movies.map((movie)=>{
                return <ShowElement movie={movie}/>;
              })
            }
        </div>
    </section>
    </>
  )
}

export default Shows;
