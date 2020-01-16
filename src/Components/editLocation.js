import React, { useState, useEffect ,useContext } from "react";
import LocationStore from "../Stores/LocationStore";
import CategoryStore from "../Stores/store";
import Modal from "react-bootstrap/Modal";

  function  EditLocation (props) {
    const store = useContext(LocationStore);
    const [show, setShow] = useState(false);
    const [newName, setNewName] = useState(store.Categories[props.index])
    if(!props.index && show == true  && props.index != 0){
      console.log(props.index);
      
    setShow(false)
    alert("Place select a Location to edit")
    }
    useEffect  (() => {
      });

      let location = store.Locations[props.index]


      let handleChange =(event) => 
      {
        const attribute =event.target.getAttribute("inputAttribute")
        const data = event.target.value
        location[attribute] = data
      }
      let submit = () => {
        if(!newName)
        {
          alert("The Location name can not be empty!")
        }
        else{
            store.editLocation(props.index,newName)
            setShow(false)
        }
      }

    return (
      <>
        <button variant="outline-light" onClick={() => setShow(!show)}>
          Edit
        </button>
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Edit Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {Object.keys(location).map(k => <input inputAttribute = {k} defaultValue = {k} onChange = {e=> handleChange(e)}> </input>)}
          </Modal.Body>
        </Modal>
      </>
    )
  }
  export default EditLocation