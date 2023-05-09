const express = require('express')
const app = express()
const port = 8000

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/pages/index.html");
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
})