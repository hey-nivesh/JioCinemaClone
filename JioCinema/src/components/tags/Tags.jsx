import React, { useState } from 'react';
import styles from './tags.module.css';
const Tags = () => {
    let [tags, setTags] = useState([
        "For you",
        "Premium",
        "Laughter Chefs",
        "Cricket",
        "MTV Roadles XX",
        "Free Movie",
        "Bigg Boss",
        "News",
        "For you",
        "Premium",
        "Laughter Chefs",
        "For You",
        "Bigg Boss"])
    return (
        <>
            <div className={styles.tags}>

                {
                    tags.map((tags) => {
                        return <p className={styles.tag}>{tags}</p>
                    })
                }

            </div>
        </>
    )
}
export default Tags