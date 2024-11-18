"use client"
import React, { useEffect, useState } from 'react'
import NavBar from '../componants/navbar'
import VehicleList from './vehicle-list'
import NewVehicleForm from './new-vehicle-form'
import { addVehicle, getvehicle } from '../_services/vault-services'
import { useUserAuth } from '../_utils/auth-context';

export default function page() {
  const { user } = useUserAuth();
const [vehicleList, setVehicleList] = useState([]);
async function loadVehilces(){

  const vehicles = await getvehicle(user.uid)
  if(Array.isArray(vehicles)){
    console.dir("made it")
    setVehicleList(vehicles);
    }
    else{
      console.dir(" did not made it")
        setVehicleList([])
    }


}
useEffect(() => {
  if (user?.uid) {
    loadVehilces();
  }
}, [user]);
  const AddVehicle = (vehicle) => {

    const vehicleID = addVehicle(user.uid,vehicle)
    const newVehicle = {...vehicle , id: vehicleID}
     setVehicleList([...vehicleList,newVehicle])
     
 }

 
  return (
    <div>
      <NavBar/>
      <div>
        <VehicleList vehicleList={vehicleList}/>
      </div>
      <div>
        <NewVehicleForm addVehicleFunc={AddVehicle}/>
      </div>

    </div>

    
  )
}
