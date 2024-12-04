"use client"
import React, { useEffect, useState } from 'react'
import NavBar from '../componants/navbar'
import { useUserAuth } from '../_utils/auth-context';
import { getProfileData } from '../_services/vault-services';
export default function Profile() {
  const { user } = useUserAuth();
  const [numOfVehicles, setNumOfVehicles] = useState(0);
  const [numOfRepairs, setNumOfRepairs] = useState(0);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { totalVehicles, totalRepairs } = await getProfileData(user.uid);
        setNumOfVehicles(totalVehicles);
        setNumOfRepairs(totalRepairs);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (user?.uid) {
      fetchProfileData();
    }
  }, [user?.uid]);
  console.log(numOfVehicles)
  return (
    <div className='h-screen'> 
        <NavBar/>


        <div className=' text-center justify-center'>
        <h1 className='text-white text-7xl'> Total Vehicles: {numOfVehicles}</h1>
        <h1 className='text-white text-7xl'> Total Repairs Done: {numOfRepairs}</h1>
        </div>
      </div>


  )
}
