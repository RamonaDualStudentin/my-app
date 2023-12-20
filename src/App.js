import React from "react";
import "./App.css";
import MenuBar from "./MenuBar";
import QuickSelect from "./quickSelect";
import Region from "./region";
import Regioncards from "./regioncards";
import ServiceRequest from "./serviceRequest";
import ServiceRequestcards from "./serviceRequestcards";
import Zone from "./zone";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <QuickSelect/>
      <Region />
      <Regioncards />
      <ServiceRequest />
      <ServiceRequestcards />
      <Zone />
    </div>
  );
}

export default App;
