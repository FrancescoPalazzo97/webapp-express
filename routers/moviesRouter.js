const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
    res.send(`Ecco tutti i film`);
})

router.get(`/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Film ${id}`);
})

module.exports = router;