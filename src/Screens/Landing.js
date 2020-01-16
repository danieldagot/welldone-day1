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
  const [categories, setCategiris] = useState(store.Categories);
  const [edit, setEdit] = useState();
  const [newName, setNewName] = useState();
  const handleSelact =(index) => {
    console.log(index);
  if(index == selected){
  setSelected()
  }
  else{
    setSelected(index)
  }
  }
  return (
    <>
    <h6 className ="header"> My Categories  </h6>
    
    { !store.Categories.length >=1 ?  <div key = "Actions" className = "Actions">   <AddCategory   /> </div>  
    : <div key = "Actions" className = "Actions">  
    {selected  || selected==0  ?   <> <EditCategory index = {selected} />
    <button   onClick = { () => {  setSelected(null) ; store.removeCategory(selected)}}>Delete</button> </>
  : null}
    <AddCategory  />
    <button> View Details </button>
     </div> }

   { categories.map((c,index) => <div key = {index} className =  {selected == index ?  "selectedCategory" : "Category" } onClick ={ () =>  handleSelact(index)} > {c}  </div> )}
    </>
  )
});

export default Landing;


