import React, { useState, useEffect ,useContext } from "react";
import FaveStore from "../Stores/store";
import Modal from "react-bootstrap/Modal";

  function  EditCategory (props) {
    const store = useContext(FaveStore);
    const [show, setShow] = useState(false);
    const [newName, setNewName] = useState(store.Categories[props.index])
    if(!props.index && show == true  && props.index != 0){
      console.log(props.index);
      
    setShow(false)
    alert("Place select a category to edit")
    }
    useEffect  (() => {
      });
      let submit = () => {
        if(!newName)
        {
          alert("the category name can not be empty")
        }
        else{
            store.editCategory(props.index,newName)
            setShow(false)
        }
      }

    return (
      <>
        <button variant="outline-light" onClick={() => setShow(!show)}>
          edit
        </button>
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">edit category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input defaultValue ={store.Categories[props.index]} onChange ={(event)  => setNewName(event.target.value)} ></input> <button onClick = {() => submit()}> save changes </button>
          </Modal.Body>
        </Modal>
      </>
    )
  }
  export default EditCategory