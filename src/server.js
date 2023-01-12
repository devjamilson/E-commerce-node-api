const express = require('express')
const app = express()
const AuthController =  require('./controllers/AuthController')
const AdminController =  require('./controllers/AdminController')

const authenticateMiddleware = require('./middlewares/authenticate')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use("/auth", AuthController)
app.use("/admin", authenticateMiddleware, AdminController)

require('dotenv/config')



app.listen(8080, () =>{
    console.log("Servidor rodando na porta 8080")
})