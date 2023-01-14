const {Router} = require('express')
const UserController = require('../controllers/UserController/index')
const LoginController = require('../controllers/Login/index')
const routes = Router()

routes.get('/', (req, res)=>{
    res.send("Olá mundo")
})

//users
routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login',LoginController.createSession)


routes.post('/products/:user_id',(req, res)=>{
    res.send('Olá mundo')
})
routes.get('/products/:user_id',(req, res)=>{
    res.send('Olá mundo')
})
routes.patch('/products/:user_id',(req, res)=>{
    res.send('Olá mundo')
})
routes.get('/products/:product_id',(req, res)=>{
    res.send('Olá mundo')
})
routes.get('/products',(req, res)=>{
    res.send('Olá mundo')
})
routes.delete('/products/:user_id/:product_id',(req, res)=>{
    res.send('Olá mundo')
})



routes.post('/carts/:user_id',(req, res)=>{
    res.send('Olá mundo')
})
routes.get('/carts/:user_id',(req, res)=>{
    res.send('Olá mundo')
})

routes.get('/carts/:user_id/:carts_id',(req, res)=>{
    res.send('Olá mundo')
})

module.exports = routes;