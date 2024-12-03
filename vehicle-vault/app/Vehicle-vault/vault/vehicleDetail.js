"use client"
import React, { useState } from "react";
import RepairForm from "./repairform";
import { addDoc, collection } from "firebase/firestore";
import { updateRepairs } from "../_services/vault-services";
import { useUserAuth } from "../_utils/auth-context";
import { db } from "../_utils/firebase";


const VehicleDetail = ({ vehicle, goBack }) => {
  const { user } = useUserAuth();
  const [formVisibility, setFormVisibility] = useState(false);
  const [repairs, setRepairs] = useState(vehicle.reports || []);

  const changeVisibility = () => setFormVisibility(!formVisibility);

  const addRepair = async (repair) => {
    try {
      const repairRef = await addDoc(collection(db, "Users", user.uid, "vehicle", vehicle.id, "repairs"), {
        ...repair})
        const repairID = {...repair, id: repairRef.id}
      const updatedReports = [...vehicle.reports, repairID];
      console.log(updatedReports)
      vehicle.reports = updatedReports

      setRepairs(updatedReports );
      updateRepairs(user.uid,vehicle.id,vehicle)
      setFormVisibility(false); 
    } catch (error) {
      console.error("Error adding repair: ", error);
    }
  };

  return (
    <div className="p-5 border border-slate-900 rounded bg-slate-900">
      <h1>
        {vehicle.make} {vehicle.model}
      </h1>
      <p>Kilometers: {vehicle.kilometers}</p>
      <p>Color: {vehicle.color}</p>

      {formVisibility ? (
        <div>
          <RepairForm repairdata={addRepair} />
          <button onClick={changeVisibility}>Close Form</button>
        </div>
      ) : (
        <button onClick={changeVisibility}>Add Repair</button>
      )}

      <h2>Repairs</h2>
      <ul>
        {repairs.map((repair) => (
          <li key={repair.id}>
            {repair.date} - {repair.title} (${repair.cost})
          </li>
        ))}
      </ul>

      <button
        onClick={goBack}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Back to List
      </button>
    </div>
  );
};
export default VehicleDetail;