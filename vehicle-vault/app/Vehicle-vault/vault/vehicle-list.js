import React from 'react'
import Vehicle from './vehicle'

export default function VehicleList({vehicleList}) {
    const vehicleArray = [
        {
            id: "abc123", // Firestore document ID
            make: "Tesla",
            model: "Model 3",
            year: 2022,
            licensePlate: "EV1234T",
            color: "Midnight Silver Metallic",
            kilometers: 12000,
            reports: [
                { reportId: "rpt001", description: "Oil change and tire rotation", date: "2024-10-15" },
                { reportId: "rpt002", description: "Battery check and diagnostics", date: "2024-11-01" }
            ]
        },
        {
            id: "xyz789",
            make: "Toyota",
            model: "Camry",
            year: 2020,
            licensePlate: "CAM2020",
            color: "Blue",
            kilometers: 35000,
            reports: [
                { reportId: "rpt003", description: "Brake pads replacement", date: "2024-08-10" },
                { reportId: "rpt004", description: "Transmission fluid change", date: "2024-11-02" }
            ]
        },
        {
            id: "def456",
            make: "Honda",
            model: "Civic",
            year: 2021,
            licensePlate: "CIV2021",
            color: "Red",
            kilometers: 22000,
            reports: [
                { reportId: "rpt005", description: "Engine tune-up", date: "2024-09-05" },
                { reportId: "rpt006", description: "AC repair", date: "2024-11-05" }
            ]
        }
    ];
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
