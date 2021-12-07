import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genreRouter from './api/genres';
import './db';
import './seedData';
dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/genres', genreRouter)
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});