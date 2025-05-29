const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `
    SELECT m.*
    FROM movies m
    `
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: `Database query failed: ${err}` });
        }
        res.json(results)
    })
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = `
    SELECT m.*
    FROM movies m
    WHERE m.id = ?
    `
    const reviewsSql = `
    SELECT r.*
    FROM reviews r
    JOIN movies m
    ON m.id = r.movie_id
    WHERE m.id = ?
    `
    connection.query(sql, [id], (err, moviesResults) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` });
        if (moviesResults === 0) return res.status(404).json({ error: `post not found` });

        const movie = moviesResults[0];

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: `Database query failed: ${err}` });
            if (reviewsResults === 0) return res.status(404).json({ error: `post not found` });

            movie.reviews = reviewsResults;
            res.json(movie);
        })
    }
    )
}

module.exports = { index, show }