import React from 'react'
import Vehicle from './vehicle'

export default function VehicleList({vehicleList}) {

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {
    vehicleList.map((vehicle) => (
      <Vehicle key={vehicle.id} vehicle={vehicle} />
    ))
  }
</div>
  )
}
