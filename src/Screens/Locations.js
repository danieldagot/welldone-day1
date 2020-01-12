import React, {useState, useEffect,useContext} from "react";
import { observer } from "mobx-react-lite";
import LocationStore from "../Stores/LocationStore";
import AddLocation from "../Components/addLocation"
function Locations() {
    const store = useContext(LocationStore);
    const [selected, setSelected] = useState();
    const [locations, setLocations] = useState(store.Locations);
    useEffect(() => {
        setLocations(store.Locations)
    });

    return (
      <>
     <AddLocation/>
      </>
    );
  }


  export default Locations;