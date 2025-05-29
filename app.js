const express = require(`express`);
const app = express();
const port = process.env.PORT || 3000;

const moviesRouter = require(`./routers/moviesRouter`)

app.use(`/movies`, moviesRouter);

const notFound = require(`./middlewares/notFound.js`);
const errorsHandler = require("./middlewares/errorsHandler.js");

app.use(express.static(`public`));

app.use(express.json());

app.get(`/`, (req, res) => {
    res.send(`Benvenuto`);
})

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Il server è in ascolto`);
})