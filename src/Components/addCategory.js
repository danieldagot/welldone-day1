import React, { useState, useEffect ,useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "react-bootstrap"
import FaveStore from "../Stores/store";
function AddCategory () {
    useEffect(() => {

    });
    
    return (
      <>
      <CreateCategoryModal />  
      </>
    );
  }
  export default AddCategory

  function  CreateCategoryModal (props) {
    const [show, setShow] = useState(false);

    useEffect  (() => {
      });
    return (
      <>
        <button  onClick={() => setShow(!show)}>
          add category
        </button>
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">add category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <AddCategotyBody setShow = {setShow}  />
          </Modal.Body>
        </Modal>
      </>
    );
  }

  function AddCategotyBody(props) {
      const [input, setInput] = useState();
      const store = useContext(FaveStore);
      let sabmit = () => {
        if(!input)
        {
          alert("the category name can not be empty")
        }
        else{
          store.addCategory(input)
          props.setShow(false)
        }
      }
      return (
        <>
       <input type = "text" placeholder = "Category name" onChange = {e=> setInput(e.target.value)}></input>
       <button onClick ={sabmit}>save</button>
        </>
      );
    }