import Link from 'next/link';
import React from 'react'

export default function Vehicle({vehicle, onSelect}) {
const {year,make,model,kilometers,id} = vehicle
const boxColorStyle = {
  backgroundColor: vehicle.color,
};
const handleVehicleSelect = () => {
    onSelect(vehicle)
}
  return (
    
    <div className= "p-5 border-2 border-teal-300 w-72 m-4 rounded-lg hover:bg-teal-600" style={boxColorStyle} onClick={handleVehicleSelect}>
      <h1 className="text-xl font-bold text-white">{year}, {make}, {model}</h1>
      <p className="text-white">Kilometers: {kilometers}</p>
    </div>
  
    



  )
}


