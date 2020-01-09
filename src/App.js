import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Landing from "./Screens/Landing"  ; 
import 'bootstrap/dist/css/bootstrap.min.css';

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
      </div>

    </Router>
    </>
  );
}
export default App;

