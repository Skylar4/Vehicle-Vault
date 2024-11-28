import React from "react";

const VehicleDetail = ({ vehicle, goBack }) => {
  return (
    <div className="p-5 border border-slate-900 rounded bg-slate-900">
      <h1>{vehicle.make} {vehicle.model}</h1>
      <p>Kilometers: {vehicle.kilometers}</p>
      <p>Color: {vehicle.color}</p>
      <button onClick={goBack} className="mt-4 p-2 bg-blue-500 text-white rounded ">
        Back to List
      </button>
    </div>
  );
};

export default VehicleDetail;