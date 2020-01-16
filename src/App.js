import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Landing from "./Screens/Landing"  ; 
//import 'bootstrap/dist/css/bootstrap.min.css';
import LocationsPage from "./Screens/Locations"
import "bootstrap/dist/css/bootstrap.min.css";

import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  useEffect(() => {
  });
  
  return (
    <>
    <Router>
      <div className="App">
        <Route path="/" exact render={() => <Landing/>} />
        <Route path="/Locations" exact render={() => <LocationsPage />} />
      </div>

    </Router>
    </>
  );
}
export default App;

