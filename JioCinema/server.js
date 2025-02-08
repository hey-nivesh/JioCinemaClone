import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Endpoint to get all movies
app.get('/api/movies', (req, res) => {
    fs.readFile(path.join(__dirname, 'movie_data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading movie data');
            return;
        }
        const movies = JSON.parse(data);
        res.json(movies);
    });
});

// Endpoint to get a movie by ID
app.get('/api/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    fs.readFile(path.join(__dirname, 'movie_data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading movie data');
            return;
        }
        const movies = JSON.parse(data);
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).send('Movie not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});