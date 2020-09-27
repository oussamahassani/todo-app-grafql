export const createTodo  = todo => {
    return  {
      query: `
      mutation CreateTodo(
        $titel: String!,
        $status: String!,
        $actions: String!,
        
      ) {
        createTodo(todoInput: {
          titel: $titel,
          status: $status,
          actions: $actions,
         
        }) {
          _id
          titel
          status
          
        }
      }
    `,
    variables: {
      titel: todo.titel,
      status: todo.status,
      actions: todo.actions,
      
    }
  }

       
}
export const TodoQuery = {
    query: `
      query {
        todos {
          _id
          actions
          status
          titel
          
        }
       
      }
    `
  };
  export const updateTodo = todo => {
    return {
      query: `
        mutation updateTodo(
          $todoId: String! ,
          $actions :String ,
          $status : String ,
          $titel :String
        ) {
          updateTodo(todoId: $todoId , actions :$actions , status :$status , titel:$titel) {
            _id
          }
        }
      `,
      variables: {
        todoId: todo.todoId ,
        actions : todo.actions,
        status : todo.status ,
        titel : todo.titel
      }
    }
  };
  export const UpdteMutation = todoId => {
    return {
      query: `
        mutation deleteTodo(
          $todoId: String!
        ) {
            deleteTodo(todoId: $todoId) {
            _id
          }
        }
      `,
      variables: {
        todoId: todoId
      }
    }
  };