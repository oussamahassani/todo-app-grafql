import React, {useState} from 'react'
 import {createTodo} from './query'
import {getalltodos} from './action'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Newtodo() {
    const [lgShow, setLgShow] = useState(false);
    const [state, setstate] = useState({
        actions: "",
        status: "",
        titel: "",
    })
    const Addnewtodo = async() => {
const todo = createTodo(state)
try {
    console.log(todo)
 const resulta = await getalltodos(todo)
 console.log(resulta)
}
catch(err){
    console.log(err)
}
    }
    return (
        <div>
               <Button onClick={() => setLgShow(true)}>  ajouter Nouvaux to-do </Button>
    
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        Modifier todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       

    <header className="container">

  
    <section className="modal_content">
        <div class="row row-cols-3">
    <label className="col">Titre</label>
    <input  className="col-8" type="text" onChange= {(e) => state.titel = e.target.value}></input>
    </div>
    <br></br>
    <div class="row row-cols-3">
    <label>Action</label>
    <input className="col-8" type="text" onChange= {(e) => state.actions = e.target.value}></input>
    </div>
    <br></br>
    <div class="row row-cols-3">
    <label>Status</label>
    <input  className="col-8" type="text" onChange= {(e) => state.status = e.target.value}></input>
    </div>
  <br></br>
  <div className="text-center">
    <button className="btn text-success"  onClick={Addnewtodo}>Confirm</button>
    </div>
    </section>
    </header>
    </Modal.Body>
    </Modal>
  </div>
);
        
    
}
