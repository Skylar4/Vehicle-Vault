"use client"
import React, { useEffect, useState } from 'react'
import VehicleList from './vehicle-list'
import NewVehicleForm from './new-vehicle-form'
import { addVehicle, getvehicle } from '../_services/vault-services'
import { useUserAuth } from '../_utils/auth-context';
import Modal from '../componants/modal'
import NavBar from '../componants/navbar'
import VehicleDetail from './vehicleDetail'

export default function page() {
  const { user } = useUserAuth();
const [vehicleList, setVehicleList] = useState([]);
const [isModalopen, setModalOpen] = useState(false);
const [selectedVehicle, setSelectedVehicle] = useState(null);

const selectVehicle = (vehicle) => {
  setSelectedVehicle(vehicle); 
};

const goBackToList = () => {
  setSelectedVehicle(null); 
};
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
  {selectedVehicle ? (
    <VehicleDetail vehicle={selectedVehicle} goBack={goBackToList} />
  ) : (
    <>
      <NavBar />
      <div className="flex-1">
        <div>
          <VehicleList vehicleList={vehicleList} onselect={selectVehicle} />
        </div>
        {isModalopen && (
          <div>
            <Modal onClose={() => setModalOpen(false)}>
              <NewVehicleForm addVehicleFunc={AddVehicle} />
            </Modal>
          </div>
        )}
      </div>
      
        <button
          onClick={() => setModalOpen(true)}
          className="p-3 bg-teal-400 rounded-xl    ml-10 bottom-1 align-middle justify-center"
        >
          Add Vehicle
        </button>
      
    </>
  )}
</div>

    
  )
}
