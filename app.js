const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
})