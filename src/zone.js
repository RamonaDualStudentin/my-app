import React from "react";
import Icons from "./zoneicons";

function Zone() {
  <h2>Select a zone</h2>
  const handleZoneClick = (zoneNumber) => {
    
    console.log(`Zone ${zoneNumber} clicked!`);
  };

  return (
    <div className="zone">
      <h2>Select a zone</h2>

      <Icons onClick={() => handleZoneClick(1)} icon={<Zone S />} />
      <Icons onClick={() => handleZoneClick(2)} icon={<Zone1 />} />
      <Icons onClick={() => handleZoneClick(3)} icon={<Zone N />} />
      <Icons onClick={() => handleZoneClick(4)} icon={<IZone L />} />
    </div>
  );
}

export default Zone;