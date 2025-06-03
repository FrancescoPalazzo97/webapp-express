const express = require(`express`);
const app = express();
const port = process.env.PORT || 3000;

const cors = require(`cors`);

const moviesRouter = require(`./routers/moviesRouter`)

const imagePath = require(`./middlewares/imagePath.js`);
const notFound = require(`./middlewares/notFound.js`);
const errorsHandler = require("./middlewares/errorsHandler.js");

app.use(cors({ origin: process.env.FE_APP }));

app.use(imagePath);

app.use(express.static(`public`));

app.use(express.json());

app.use(`/movies`, moviesRouter);

app.get(`/`, (req, res) => {
    res.send(`Benvenuto`);
})

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Il server è in ascolto`);
})