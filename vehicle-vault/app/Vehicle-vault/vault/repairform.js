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
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Date:</label>
            <input name="date" value={RepairData.date} onChange={handleChange} />
          </div>
          <div>
            <label>Kilometers:</label>
            <input
              name="kilometers"
              value={RepairData.kilometers}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Title:</label>
            <input name="title" value={RepairData.title} onChange={handleChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={RepairData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label>Cost:</label>
            <input name="cost" value={RepairData.cost} onChange={handleChange} />
          </div>
          <button type="submit">Add Repair</button>
        </form>
      );
}
