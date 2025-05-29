const express = require(`express`);
const router = express.Router();
const moviesController = require(`../controllers/moviesController`);

const { index, show } = moviesController;

router.get(`/`, index);

router.get(`/:id`, show);

module.exports = router;