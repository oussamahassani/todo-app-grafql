import { queries } from "@testing-library/react";

export const getalltodos = (request) =>{
    return fetch ('http://localhost:4000/graphql',{

    method :'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }

    }
    )

}