import React, { useState } from 'react'

export default function RepairForm({repairdata}) {
    const [RepairData, setRepairData] = useState({
        date: "",
        kilometers: "",
        title: "",
        description: "",
        cost: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setRepairData({ ...RepairData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        repairdata(RepairData); 
        setRepairData({
          date: "",
          kilometers: "",
          title: "",
          description: "",
          cost: "",
        });
      };
      const labelStyle = "w-1/4 text-left text-white";
      const InputStyle = "flex-grow border border-teal-400 rounded px-2 py-1";
    return (
<form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/3">
  <div className="flex items-center justify-between gap-4">
    <label className={labelStyle}>Date:</label>
    <input
      className={InputStyle}
      name="date"
      value={RepairData.date}
      onChange={handleChange}
    />
  </div>
  <div className="flex items-center justify-between gap-4">
    <label className={labelStyle}>Kilometers:</label>
    <input
      className={InputStyle}
      name="kilometers"
      value={RepairData.kilometers}
      onChange={handleChange}
    />
  </div>
  <div className="flex items-center justify-between gap-4">
    <label className={labelStyle}>Title:</label>
    <input
      className={InputStyle}
      name="title"
      value={RepairData.title}
      onChange={handleChange}
    />
  </div>
  <div className="flex items-center justify-between gap-4">
    <label className={labelStyle}>Description:</label>
    <textarea
      className={InputStyle}
      name="description"
      value={RepairData.description}
      onChange={handleChange}
    ></textarea>
  </div>
  <div className="flex items-center justify-between gap-4">
    <label className={labelStyle}>Cost:</label>
    <input
      className={InputStyle}
      name="cost"
      value={RepairData.cost}
      onChange={handleChange}
    />
  </div>
  <button
    type="submit"
    className="mt-4 px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-600"
  >
    Add Repair
  </button>
</form>
      );
}
