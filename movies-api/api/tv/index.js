import express from 'express';


import {
   getTVShows,
  
  } from '../tmdb-api';
//import uniqid from 'uniqid';
//import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
//import e from 'express';
//import { get } from 'mongoose';

const router = express.Router();

router.get('/',asyncHandler(async(req,res)=>{
    const shows = await getTVShows();
    res.status(200).json(shows)
    if(shows)
    {
    res.status(200).json(shows);
        
    }
    else
    {
        res.status(404).json({
            message: 'The resource you requested couldnt be found.',
            status_code: 404
        });
    }

}
));

router.get('/:')


export default router;