import React from "react";
import "./App.css";
import MenuBar from "./MenuBar";
import quickSelect from "./quickSelect";
import region from "./region";
import regioncards from "./regioncards";
import serviceRequest from "./serviceRequest";
import serviceRequestcards from "./serviceRequestcards";
import zone from "./zone";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <quickSelect/>
      <region />
      <regioncards />
      <serviceRequest />
      <serviceRequestcards />
      <zone />
    </div>
  );
}

export default App;
