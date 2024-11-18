"use client"
import React from 'react'
import NavBar from '../componants/navbar'
import VehicleList from './vehicle-list'
import NewVehicleForm from './new-vehicle-form'

export default function page() {



  const AddVehicle = (vehicle) => {

    const vehicleID = addItems(user.uid,item)
    const newVehicle = {...vehicle , id: vehicleID}
     setItemList([...vehicleList,newVehicle])
     
 }
  return (
    <div>
      <NavBar/>
      <div>
        <VehicleList/>
      </div>
      <div>
        <NewVehicleForm addVehicleFunc={AddVehicle}/>
      </div>

    </div>

    
  )
}
