import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import JClogo from '../../assets/images/jc_logo_v2.svg';
import Crown from '../../assets/images/crown.svg';
import SearchIcon from '../../assets/images/ic_search.svg';
import VoiceSearch from '../../assets/images/voice-search.svg';
import Avatar from '../../assets/images/avatar_guest.svg';
import Show from '../show/ShowElement';

const Header = (props) => {
    let navLinks = ["Home", "Sports", "Movie", "TV Shows", "More"];
    let [searchTitle, setSearchTitle] = useState("");
    let [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(()=>{

        if(searchTitle!=="")
        {
            let filterMovies = props.movies.filter((movie)=>{
                return movie.name.toUpperCase().indexOf(searchTitle.toUpperCase())==0
            })
    
            setFilteredMovies(filterMovies)
        }
        else
        {
            setFilteredMovies([])
        }

        


    },[searchTitle])

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img className="logo-image" src={JClogo} alt='logo' />
                        <div className={styles.premium}>
                            <img src={Crown} alt="image" />
                            <p>Go Premium</p>
                        </div>
                    </div>
                    <ul className={styles.navLinks}>
                        {
                            navLinks.map((link) => {
                                return <li className={styles.navLink} key={link}>{link}</li>
                            })
                        }
                    </ul>
                </nav>

                <div className={styles.search}>
                    <div className={styles.searchBox}>
                        <div className={styles.headerIcon}>
                            <img src={SearchIcon} alt="Icon" />
                        </div>

                        <input className={styles.searchInput} type="text" onChange={(event) => {
                            setSearchTitle(event.target.value);
                        }} placeholder='Movies, Shows and More ' />

                        <div className={styles.headerIcon}>
                            <img src={VoiceSearch} alt="Icon" />
                        </div>
                    </div>
                    <img className={styles.userIcon} src={Avatar} alt="icon" />
                </div>

            </header>
            
                {
                    filteredMovies.length !== 0 ? (
                        <div className={styles.searchResults}>

                            {
                                filteredMovies.map((movie) => {
                                    return <Show movie={movie} />
                                })
                            }

                        </div>
                    ) : null
                }

            
        </>
    );
}

export default Header;