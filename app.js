const express = require(`express`);
const app = express();
const port = process.env.PORT || 3000;

const moviesRouter = require(`./routers/moviesRouter`)

app.use(`/movies`, moviesRouter);

app.use(express.static(`public`));

app.use(express.json());

app.get(`/`, (req, res) => {
    res.send(`Benvenuto`);
})

app.listen(port, () => {
    console.log(`Il server è in ascolto`);
})