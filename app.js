const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

require('dotenv/config')

const produto =[ 
    {
        id: 1,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 140,
    },
    {
        id: 2,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 3,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 4,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 140,
    },
    {
        id: 5,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 6,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 1,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 140,
    },
    {
        id: 2,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 3,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 4,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 140,
    },
    {
        id: 5,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 6,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 4,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 140,
    },
    {
        id: 5,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
    },
    {
        id: 6,
        src: 'https://images-americanas.b2w.io/produtos/01/00/img/4533174/8/4533174812_1GG.jpg',
        nome: 'celular',
        preco: 322,
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