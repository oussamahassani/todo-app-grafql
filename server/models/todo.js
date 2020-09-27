const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todolistshema = new Schema ({

    actions : String,
    status  : String,
    titel : String

})


const Todo = mongoose.model('Todo',todolistshema)

module.exports = Todo