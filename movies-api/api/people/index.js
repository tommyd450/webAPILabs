import express from 'express';

import {
    getPerson,
    getPersonCredits
  } from '../tmdb-api';

import asyncHandler from 'express-async-handler';

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const person = await getPerson(id);
        res.status(200).json(person);
    
}));


router.get('/:id/credits', asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id);
    const personCredits = await getPersonCredits(id);
    res.status(200).json(personCredits)
}));
export default router;