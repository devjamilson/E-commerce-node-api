const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
     },
     email: {
         type: String,
         required: true,
         unique:true, 
         lowercase: true
     },
     password:{
         type: String,
         required: true,
         select:false
     },
     createdAt:{
         type: Date,
         default: Date.now
     }
})

UserSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, 10);

    console.log(this)
    console.log(hash)
    this.password = hash;
})

const User = mongoose.model("User", UserSchema);

module.exports = User;

