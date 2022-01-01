import express from 'express';
//import genres  from "./genreModel";
import { getGenres } from '../tmdb-api';

const router = express.Router(); 
router.get('/', async (req, res) => {
    const users = await getGenres();
    res.status(200).json(users);
});


router.get('/api/genres', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    const genres = getGenres(); 
    if (genres) {
        res.status(200).json(genres);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;