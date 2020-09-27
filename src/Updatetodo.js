
import React ,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {updateTodo} from './query'
import {getalltodos} from './action'
export default function Updatetodo(props) {
    const [lgShow, setLgShow] = useState(false);
    const [state, setstate] = useState({
        actions: props.element.actions ,
        status: props.element.status,
        titel: props.element.titel ,
        todoId : props.element._id
    })
    const Updatetodo = async() => {
        const todo = updateTodo(state)
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
      <Button onClick={() => setLgShow(true)}>Modifier </Button>
    
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
        <section className="container">
        <div class="row row-cols-3">
    <label className="col">Titre</label>
    <input  className="col-8" type="text" defaultValue = {props.element.titel} onChange= {(e) => state.titel = e.target.value}></input>
    </div>
    <br></br>
    <div class="row row-cols-3">
    <label>Action</label>
    <input className="col-8" type="text" defaultValue = {props.element.actions} onChange= {(e) => state.actions = e.target.value}></input>
    </div>
    <br></br>
    <div class="row row-cols-3">
    <label>Status</label>
    <input  className="col-8" type="text" defaultValue = {props.element.status}  onChange= {(e) => state.status = e.target.value}></input>
    </div>
  <br></br>
  <div className="text-center">
    <button className="btn text-success"  onClick={Updatetodo}>Confirm</button>
    </div>
    </section>
 
  

        </Modal.Body>
      </Modal>
        </div>
    )
}
