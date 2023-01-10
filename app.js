const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


require('dotenv/config')

const api = process.env.API_URL

app.listen(8080, () =>{
    console.log("Servidor rodando na porta 8080")
})