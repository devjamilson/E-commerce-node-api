const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://jamilsonf:147208jose@ecommerce.4cb9cyr.mongodb.net/api-usuarios?retryWrites=true&w=majority', {}, (error)=>{
    if(error){
        console.log('Falha ao se autenticar com o mongodb')
        console.log(error)
        return;
    }

    console.log("Banco de dados conectado com sucesso!")
})

mongoose.Promise = global.Promise;

module.exports = mongoose