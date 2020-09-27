const {buildSchema}= require('graphql')

const Shema = buildSchema(`
type TodoType {
    _id: ID!
    actions: String
    status: String
    titel: String
   
  }

  type UserType {
      _id :ID!
      Nom :String ,
      Prenom :String ,
      Email  :String ,
      Password :String ,
  }
  input TodoInput {
    actions: String
    status: String
    titel: String

  }

  input UserInput {
    Nom :String! ,
    Prenom :String! ,
    Email  :String! ,
    Password :String! ,
  }

  type RootQuery {
    todos: [TodoType!]!
    todo(todoId: String!): TodoType
    users: [UserType!]!
    user(userId: String!): UserType
 
  }

  type RootMutation {
    createTodo(todoInput: TodoInput): TodoType
    createUser(userInput: UserInput): UserType
    deleteTodo(todoId: String!): TodoType
    updateTodo (todoId :String! ,actions :String , status :String , titel:String) : TodoType
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }`)

  
  module.exports  = Shema