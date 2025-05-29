const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `
    SELECT m.*
    FROM movies m
    `
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` });

        const movies = results.map(result => {
            const obj = {
                ...result,
                image: `${req.imagePath}${result.image}`
            }
            return obj;
        })
        res.json(movies);
    })
}

const show = (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: `ID film non valido. Si prega di fornire un numero intero.` });
    }

    const moviesSql = `
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
    connection.query(moviesSql, [id], (err, moviesResults) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` });
        if (moviesResults.length === 0) return res.status(404).json({ error: `Film con ID ${id} non trovato.` });

        const movie = moviesResults[0];

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: `Database query failed: ${err}` });

            movie.reviews = reviewsResults;
            res.json(movie);
        })
    }
    )
}

module.exports = { index, show }