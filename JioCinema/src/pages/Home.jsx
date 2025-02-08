import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import Channel from "../components/channels/Channel";
import Carousel from "../components/carousel/Carousel";
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";
import { useEffect, useState } from "react";
export default function Home() {
    
    let [movies, setMovies] = useState([]);
    let [featuredMovies, setFeaturedMovies] = useState([]);
    let [dramaMovies, setDramaMovies] = useState([]);
    let [hindiMovies, setHindiMovies] = useState([]);
    let [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let movieResponse = await fetch("http://localhost:5000/api/movies");
                let moviesData = await movieResponse.json();

                setMovies(moviesData);

                // filter for featured movies 
                let featMovies = moviesData.filter((movie) => movie.featured === true);
                setFeaturedMovies(featMovies.slice(0, 4));

                // filter for Drama movies 
                let draMovies = moviesData.filter((movie) => movie.genre.includes("Drama"));
                setDramaMovies(draMovies.slice(0, 6));

                // filter for Hindi movies 
                let hinMovies = moviesData.filter((movie) => movie.language.includes("Hindi"));
                setHindiMovies(hinMovies.slice(0, 6));

                // filter for Top Rating movies 
                let topMovies = moviesData.filter((movie) => movie.ImDB_rating >= 8.5);
                setTopMovies(topMovies.slice(0, 6));

            } catch (err) {
                console.log(err);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <Header movies = {movies}/>
            <Tags />
            <Carousel />
            <Channel />
            <Featured movies={featuredMovies} />

            <Shows title="DramaMovies" movies = {dramaMovies}/>
            <Shows title="Top Rated Movies" movies = {topMovies}/>
            <Shows title="Hindi Language Movies" movies = {hindiMovies}/>
        </>
    )
}