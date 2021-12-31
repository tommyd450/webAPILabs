import express from 'express';
import {  movieReviews,  } from './movieData';

import {
    getUpcomingMovies,
    getMovieImages,
    getMovies,
    getMovie,
    getCredits,
    getMovieReviews
  } from '../tmdb-api';
import uniqid from 'uniqid';
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
//import e from 'express';
//import { get } from 'mongoose';

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const totalDocumentsPromise = movieModel.estimatedDocumentCount(); //Kick off async calls
    const moviesPromise = movieModel.find().limit(limit).skip((page - 1) * limit);

    const totalDocuments = await totalDocumentsPromise; //wait for the above promises to be fulfilled
    const movies = await moviesPromise;

    const returnObject = { page: page, total_pages: Math.ceil(totalDocuments / limit), total_results: totalDocuments, results: movies };//construct return Object and insert into response object

    res.status(200).json(returnObject);
}));

/*
router.get('/', asyncHandler(async(req,res) =>{
    
    const movies = await getMovies();
    res.status(200).json(movies)
}));
*/

// Get movie details

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
        res.status(200).json(movie);
    
}));




router.get('/:id/reviews',asyncHandler(async (req, res) => {
    console.log("Got in");
    const id = req.params.id;
    const movieReviews = await getMovieReviews(id);
    // find reviews in list
    res.status(200).json(movieReviews);
    
}));


//Post a movie review
/*
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});
*/
router.get('/tmdb/upcoming', asyncHandler( async(req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
  }));

//Get Images
router.get('/:id/images', asyncHandler(async(req,res) =>
{
    const id = parseInt(req.params.id);
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}))

router.get('/:id/credits', asyncHandler(async(req,res) =>
{
    const id = parseInt(req.params.id);
    const credits = await getCredits(id);
    res.status(200).json(credits);
}
))


router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await getMovie(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/reviews',asyncHandler(async(req,res)=> {
    const id = parseInt(req.params.id);
    const reviews = await getMovieReviews(id);
    res.status(200).json(reviews);
    if(reviews)
    {
        res.status(200).json(reviews);
    }
    else
    {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }

}))
export default router;