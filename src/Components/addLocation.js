import React, { useState, useEffect ,useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "react-bootstrap"
import LocationStore from "../Stores/LocationStore";
import CategoryStore from "../Stores/store";
function AddLocation () {
  const [show, setShow] = useState(false);
  return (
    <>
      <button  onClick={() => setShow(!show)}>
        Add Location
      </button>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Add Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddLocationBody setShow = {setShow}  />
        </Modal.Body>
      </Modal>
    </>
  );
  }
  export default AddLocation

  function AddLocationBody(props) {
      const [input, setInput] = useState();
      const store = useContext(LocationStore);
      const Categories = useContext(CategoryStore).Categories
      console.log(Categories);
      
      var LocationTemp = {
        name : "",
        address: "",
        lat : 0,
        len : 0,
        category : Categories[0]
      }
      let handleChange =(event) => 
      {
        const attribute =event.target.getAttribute("inputAttribute")
        const data = event.target.value
        LocationTemp[attribute] = data
      }

      let submit = () => {
        let bool = false
        for (const key in  LocationTemp ) {
            if (!LocationTemp[key]) {
                alert(`the location's ${key} can not be empty`)
                bool =  true     
            break      
         }
        }
        
        if(!bool) {
          store.addLocation(LocationTemp)
          props.setShow(false)
          console.log(store.Locations);
        }
      }
      return (
        <>
       <input type = "text"  inputAttribute = "name"   placeholder = "Location Name" onChange = {e=> handleChange(e)}></input>
       <input type = "text"  inputAttribute = "address"  placeholder = "Location Address" onChange = {e=> handleChange(e)}></input>
       <div>
       <input type = "number" inputAttribute = "lat"   placeholder = "Location Lat" onChange = {e=> handleChange(e)}></input>
       <input type = "number" inputAttribute = "len"   placeholder = "Location Len" onChange = {e=> handleChange(e)}></input>
       </div>
       {/* <input type = "text" inputAttribute = "category"  placeholder = "Location category" onChange = {e=> handleChange(e)}></input> */}
       <select inputAttribute = "category"  defaultValue = {Categories[0]}  placeholder = "Location category" onSelect = {e=> handleChange(e)} onChange = {e=> handleChange(e)} >
      {Categories.map(c => <option value = {c} >{c}</option>)}
       </select >
       <button onClick ={submit}>Save</button>
        </>
      );
    }