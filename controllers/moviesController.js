const index = (req, res) => {
    res.send(`Ecco tutti i film`);
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Film ${id}`);
}

module.exports = { index, show }