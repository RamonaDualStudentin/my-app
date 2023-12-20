import React from "react";
import "./styling for the components/App.css";
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
      <Zone />
      <ServiceRequest />
      <ServiceRequestcards />
      <Region />
      <Regioncards />
      
      
      
    </div>
  );
}

export default App;
