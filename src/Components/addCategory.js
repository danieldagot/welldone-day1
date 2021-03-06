import React, { useState, useEffect ,useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "react-bootstrap"
import CategoryStore from "../Stores/store";

function AddCategory () {
  const [show, setShow] = useState(false);
  return (
    <>
      <button  onClick={() => setShow(!show)}>
        Add Category
      </button>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddCategotyBody setShow = {setShow}  />
        </Modal.Body>
      </Modal>
    </>
  );
  }
  export default AddCategory

  function AddCategotyBody(props) {
      const [input, setInput] = useState();
      const store = useContext(CategoryStore);
      let submit = () => {
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
       <input type = "text" placeholder = "Category Name" onChange = {e=> setInput(e.target.value)}></input>
       <button onClick ={submit}>Save</button>
        </>
      );
    }