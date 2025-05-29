const express = require(`express`);
const app = express();
const port = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
    res.send(`Benvenuto`);
})

app.listen(port, () => {
    console.log(`Il server è in ascolto`)
})