import React, { useState, useEffect ,useContext } from "react";
import FaveStore from "../Stores/store";
import Modal from "react-bootstrap/Modal";

  function  EditCategory (props) {
    const [show, setShow] = useState(false);
    const [newName, setNewName] = useState();
    const store = useContext(FaveStore);
    if(!props.index && show == true){
    setShow(false)
    alert("Place select a category to edit")
    }
    useEffect  (() => {
      });
      let sabmit = () => {
        if(!newName)
        {
          alert("the category name can not be empty")
        }
        else{
            store.EditCategory(props.index,newName)
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
          <input defaultValue ={store.Categories[props.index]} onChange ={(event)  => setNewName(event.target.value)} ></input> <button onClick = {() => sabmit()}> save changes </button>
          </Modal.Body>
        </Modal>
      </>
    )
  }
  export default EditCategory