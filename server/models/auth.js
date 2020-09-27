const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userShema = new Schema({
    Nom :String ,
    Prenom :String ,
    Email  :String ,
    Password :String ,
})

const User = mongoose.model('users',userShema)
module.exports = User