const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `
    SELECT m.* , ROUND(AVG(r.vote)) AS average_vote
    FROM movies m
    LEFT JOIN reviews r
    ON r.movie_id = m.id
    GROUP BY m.id
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

    const movieSql = `
    SELECT m.* , ROUND(AVG(r.vote)) AS average_vote
    FROM movies m
    LEFT JOIN reviews r
    ON r.movie_id = m.id
    WHERE m.id = ?
    `
    const reviewsSql = `
    SELECT r.*
    FROM reviews r
    WHERE r.movie_id = ?
    `
    connection.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` });
        if (movieResults.length === 0 || movieResults[0].id === null) return res.status(404).json({ error: `Film con ID ${id} non trovato.` });

        const movie = {
            ...movieResults[0],
            image: `${req.imagePath}${movieResults[0].image}`
        };

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: `Database query failed: ${err}` });

            movie.reviews = reviewsResults;
            res.json(movie);
        })
    }
    )
}

const postReview = (req, res) => {
    const { id } = req.params;

    const { name, vote, text } = req.body;

    const sql = `
    INSERT INTO reviews (name, vote, text, movie_id) VALUES(?,?,?,?)
    `
    connection.query(sql, [name, vote, text, id], (err, result) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` });

        res.status(201).json({ message: "Recensione aggiunta", id: result.insertId })
    })
}

module.exports = { index, show, postReview }