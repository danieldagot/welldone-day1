import React, {useState, useEffect,useContext} from "react";
import { observer } from "mobx-react-lite";
import LocationStore from "../Stores/LocationStore";
import AddLocation from "../Components/addLocation"
import EditLocation from "../Components/editLocation"
import LocationTible from "../Components/LocationsTible"
function LocationsPage() {
    const store = useContext(LocationStore);
    const [selected, setSelected] = useState();
    const [locations, setLocations] = useState(store.Locations);
    
    useEffect(() => {
        setLocations(store.Locations)
    });

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
       <h1 className ="header"> My Categories  </h1>
    
    { !store.Locations.length >=1 ?  <div key = "Actions" className = "Actions">   <AddLocation   /> </div>  
    : <div key = "Actions" className = "Actions">  
    {selected  || selected==0  ?   <> <EditLocation index = {selected} />
    <button   onClick = { () => {  setSelected(null) ; store.removeCategory(selected)}}>Delete</button> </>
  : null}
    <AddLocation  />
    <button> View Details </button>
     </div> }

   {/* {locations.map((c,index) => <div key = {index} className =  {selected == index ?  "selectedCategory" : "Category" } onClick ={ () =>  handleSelact(index)} > {c.name}  </div> )} */}
   <div><LocationTible /> </div> 
    </>
    );
  }


  export default LocationsPage;