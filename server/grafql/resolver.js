const User = require('../models/auth')
const Todo = require('../models/todo')
const rootResolver = {

    

  todos : async () => {
    try {
      {/*.populate('creator')*/}
      const todos = await Todo.find();
      return todos.map(todos => {
        return {
            ...todos._doc,
            _id: todos.id,
        };
      });
    }
    catch (err) {
      throw err;
    }
  },
  todo : async args => {
    console.log(args)
    try {
      const todo = await Todo.findOne({_id: args.todoId});
      console.log(todo)
      return {
        ...todo._doc,
        _id: todo.id,
    }
    }
    catch (err) {
      throw err;
    }
  },
  createTodo  : async (args, req) => {
console.log("req","ok")
   const actions = args.todoInput.actions ;
     const  status  = args.todoInput.status ;
      const   titel =args.todoInput.titel ;
    const todo = new Todo({
      actions,
      status,
      titel
 });
 
    try {
      const result = await todo
        .save()
        return {
            ...result._doc,
            _id: result.id,
        }

         
    } catch(err) {
      throw err;
    }
  },
  updateTodo : async (args , req) => {
   const actions = args.actions ;
    const  status  = args.status ;
     const   titel =args.titel ;
     const id = args.todoId

     console.log(status,titel,id)
     try {
       const TODO = await Todo.findOneAndUpdate({"_id" : id} , { "status":status ,"titel":titel  , "actions" :actions } )
     
     return {
      ...TODO._doc,
      _id: TODO.id,
  }}
     catch(err){
       console.log(err)
     }
  },
  deleteTodo :  async (args, req) => {
    

    try {
      const TODO = await Todo.findOne({_id: args.todoId});
      if (!TODO) {
        throw new Error('TODO not found!');
      }
    const result =   await Todo.deleteOne({_id: args.todoId})
           
               console.log( JSON.stringify(result))
             
            
            
    } catch(err) {
      throw err;
    }
  }
};
  module.exports = rootResolver