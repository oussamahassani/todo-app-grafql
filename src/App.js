import React , {useEffect , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoQuery ,UpdteMutation} from './query'
import {getalltodos} from './action'
import Newtodo  from './newtodo'
import Updatetodo from './Updatetodo'
function App() {
  let [state, setstate] = useState([])
useEffect(async () => {
  try {
  const res = await getalltodos(TodoQuery)
  if(res.status == 200)
  {
  console.log('ok')
 const   info = await res.json()
  console.log('res', info.data.todos)
setstate (state = info.data.todos)
  }
  }
  catch (err) {
console.log(err)
  }
  
  
}, [])
 const onclickdelate = async (id) => {
const query =   UpdteMutation(id)
 const res = await getalltodos(query)
 const info = await res.json()
 console.log(info)
 }
  return (
    <div className="App">
      <header className="App-header">
    <div style={{marginBottom:'80px', float:"left",padding:'30px'}}>  <Newtodo/></div>
    
      
      <table className="table text-white">
   
  <thead>
    <tr  className="row">
      <td className="col">Titel</td>
      <td  className="col">Actions</td>
      <td className="col">Modifier</td>
      <td className="col">Suprimer</td>
    </tr>
  </thead>
  <tbody>
       {state.map(el => <>
      <tr className="row">
       <td className="col">{el.titel}</td>
       <td className="col">{el.actions}</td>
       <td className="col"> <Updatetodo element = {el}/> </td>
       <td  className="col btn " onClick = {() => onclickdelate(el._id)}>❌</td>
    
       </tr>
       </>)}
       </tbody>
</table>
      
     
      </header>

    </div>
  );
}

export default App;
