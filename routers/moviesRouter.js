const express = require(`express`);
const router = express.Router();
const moviesController = require(`../controllers/moviesController`);

const { index, show, postReview } = moviesController;

router.get(`/`, index);

router.get(`/:id`, show);

router.post(`/:id/review`, postReview)

module.exports = router;