import React from 'react'

export default function Vehicle({vehicle}) {
const {make,model,kilometers} = vehicle


  return (
    <div className="p-5 border-2 border-teal-400 w-72 m-4 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700 hover:from-lime-500 hover:to-lime-700 transition-all duration-500 ease-in-out shadow-lg">
      <h1 className="text-xl font-bold text-white">{make} {model}</h1>
      <p className="text-white">Kilometers: {kilometers}</p>
    </div>



  )
}
