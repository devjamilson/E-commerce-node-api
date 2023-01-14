const User = require('../../models/User')
const bcrypt = require('bcrypt')

const LoginController = {

    async createSession(req, res){
        const {email, password} = req.body;

        const user = await User.findOne({email}).select("+password");
    
        if(!user){
            return res.status(400).json({
                error: true,
                message: "Usuario nao encontrado"
            })
        }
    
        if(!await bcrypt.compare(password, user.password)){
            
            return res.status(400).send({
                error: true,
                message: "Senha invalida"
            })
        }
    
        return res.json({
            user
        })
       
    }
}

module.exports = LoginController;