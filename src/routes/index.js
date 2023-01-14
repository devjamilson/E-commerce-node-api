const {Router} = require('express')
const UserController = require('../controllers/UserController/index')
const LoginController = require('../controllers/Login/index')
const ProductController = require('../controllers/Product/index')
const routes = Router()

routes.get('/', (req, res)=>{
    res.send("Olá mundo")
})

//users
routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login',LoginController.createSession)


routes.post('/products/:user_id',ProductController.createProduct)
routes.get('/products/:user_id',ProductController.getUserProducts)
routes.patch('/products/:user_id',ProductController.updateProduct)
routes.get('/products/:product_id',ProductController.getProducById)
routes.get('/products',ProductController.getProducts)
routes.delete('/products/:user_id/:product_id',ProductController.deleteProduct)



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