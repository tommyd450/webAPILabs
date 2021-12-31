import express from 'express';


import {
    getShowImages,
    getTVshow,
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

router.get('/:id',asyncHandler(async(req,res)=> {
    const id = parseInt(req.params.id);
    const showImages = await getTVshow(id);
    if(showImages)
    {
        res.status(200).json(showImages)
    }
    else
    {

        res.status(404).json({
            message: 'The resource you requested couldnt be found.',
            status_code: 404
        });
    }
}));


router.get('/:id/images',asyncHandler(async(req,res)=> {
    const id = parseInt(req.params.id);
    const showImages = await getShowImages(id);
    if(showImages)
    {
        res.status(200).json(showImages)
    }
    else
    {

        res.status(404).json({
            message: 'The resource you requested couldnt be found.',
            status_code: 404
        });
    }
}));

export default router;