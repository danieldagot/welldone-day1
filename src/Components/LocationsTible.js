import React, { useState, useEffect ,useContext } from "react";
import LocationStore from "../Stores/LocationStore";
import CategoryStore from "../Stores/store";
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { selectFilter,Comparator } from 'react-bootstrap-table2-filter';
import _ from 'lodash';
import DataTable from 'react-data-table-component';
// name: "tesr"
// address: "asd"
// lat: "2"
// len: "2"
// category: "tesdf"

function LocationTible() {
    const store = useContext(LocationStore);
    const categoryStore = useContext(CategoryStore);
    useEffect  (() => {
      
        
    });

    
    const [locations, setLocations] = useState(store.Locations)
    const [changed, setChanged] = useState(false);
    const [celcetedCategories, setCelcetedCategories] = useState();
    const [categories, setCategories] = useState(categoryStore.Categories);
   let data = locations.filter(l=>  celcetedCategories ?  l.category.includes(`${celcetedCategories}`)  : l.category )
  
    const columns = [{
        selector: 'name',
        name: 'Name',
        sortable: true
      }, {
        selector: 'address',
        name: 'Adress'
      }, {
        selector: 'lat',
        name: 'lat'
      }, {
        selector: 'len',
        name: 'len'
      }, {
        selector: 'category',
        name: 'category',
        sortable: true,
      //  formatter: cell =>  Object.assign({},Categories)[cell],
        
      }];
    return (
      <>
      <select inputAttribute = "category"  placeholder = "Location category" onChange = {e=> setCelcetedCategories(e.target.value)}  >
        <option value = ""></option>
      {categories.map(c => <option value = {c} >{c}</option>)}
       </select >
        <DataTable   title= "lications yivle" data={data}  columns = {columns} >   </DataTable>
        
      </>
    );
  }


  export default LocationTible