const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

require('dotenv/config')

const produto =[ 
    {
        id: 1,
        nome: 'celular',
        preco: 140,
    }
]

const api = process.env.API_URL

app.get(`${api}/produtos`, (req, res)=>{
    res.send(produto)
})

app.post(`${api}/produtos`, (req, res)=>{
    console.log(req.body)

    const novoProduto = req.body

    produto.push(novoProduto)

    res.status(201).json(novoProduto)
})

app.listen(8080, () =>{
    console.log("Servidor rodando na porta 8080")
})