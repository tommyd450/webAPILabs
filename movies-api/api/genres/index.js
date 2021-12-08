import express from 'express';
import genres  from "./genreModel";

const router = express.Router(); 
router.get('/', async (req, res) => {
    const users = await genres.find();
    res.status(200).json(users);
});


router.get('/api/genres', (req, res) => {
    const id = parseInt(req.params.id);
    // find reviews in list
    if (genres.id == id) {
        res.status(200).json(genres);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;