import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import quickSelect from "./components/quickSelect";
import region from "./components/region";
import regioncards from "./components/regioncards";
import serviceRequest from "./components/serviceRequest";
import serviceRequestcards from "./components/serviceRequestcards";
import zone from "./components/zone";

function App() {

    const serviceRequestcards = [
        { title: 'Card 1'},
        { title: 'Card 2', },
        { title: 'Card 3',  },
        { title: 'Card 4',  },

    ];

    const regioncards=[

    ];

    
  return (
    <div className="App">
      
      {/* <MenuBar />
      <quickSelect />
      <region />
      <regioncards />
      <serviceRequest />
      <serviceRequestcards />
  <zone />*/}
    </div>
  );
}

export default App;
