const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config()
const routes = require('./routes/index')
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log("Banco Conectado!"))


app.listen(8080, ()=>{
    console.log("Servidor Rodando!")
})