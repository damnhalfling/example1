const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.json( {test: "teste"} );
});

app.post("/transactions", (req, res) => {
    const trasaction = req.body;
    const trasactions = [{
        id: 1,
        amount: 100,
        description: "Test",
        date: "2021-01-01"
    }]

    trasactions.push(trasaction)
    res.send( trasactions );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



