import React from 'react'

export default function Vehicle({vehicle}) {
const {year,make,model,kilometers} = vehicle
const boxColorStyle = {
  backgroundColor: vehicle.color,
};
  return (
    <div className= "p-5 border-2 border-teal-400 w-72 m-4 rounded-lg" style={boxColorStyle}>
      <h1 className="text-xl font-bold text-white">{year}, {make}, {model}</h1>
      <p className="text-white">Kilometers: {kilometers}</p>
    </div>



  )
}


