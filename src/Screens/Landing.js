import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import CategoryStore from "../Stores/store";
import AddCategory from "../Components/addCategory"
import EditCategory from "../Components/editCategory"
import "../Styles/Landing.css"

const Landing = observer(() => {
  const store = useContext(CategoryStore);
  useEffect(() => {
    setCategiris(store.Categories)
  });
  const [selected, setSelected] = useState();
  const [categiris, setCategiris] = useState(store.Categories);
  const [edit, setEdit] = useState();
  const [newName, setNewName] = useState();
  const handleSelact =(index) => {
  if(index == selected){
  setSelected()
  }
  else{
    setSelected(index)
  }
  }
  return (
    <>
    <div> my categiris  </div>
    <div key = "Actions" className = "Actions"> 
    <EditCategory index = {selected}  categiris = {categiris}/>
    <button> view details </button>
    <button onClick = { () => {  setSelected(null) ; store.removeCategory(selected)}}>delete</button>
    <AddCategory   />
     </div>
   { categiris.map((c,index) => <div key = {index} className =  {selected == index ?  "selectedCategory" : "Category" } onClick ={ () =>  handleSelact(index)} > {c}  </div> )}
    </>
  )
});

export default Landing;


