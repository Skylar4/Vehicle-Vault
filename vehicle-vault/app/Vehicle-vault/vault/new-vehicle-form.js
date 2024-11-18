"use client"
import React, { useState } from 'react';

export default function NewVehicleForm({ addVehicleFunc }) {

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [color, setColor] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [reports, setReports] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicleFunc({
      make,
      model,
      year,
      licensePlate,
      color,
      kilometers,
      reports,
    });

    setMake('');
    setModel('');
    setYear('');
    setLicensePlate('');
    setColor('');
    setKilometers('');
    setReports([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>

      <div>
        <label>License Plate:</label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Color:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Kilometers:</label>
        <input
          type="number"
          value={kilometers}
          onChange={(e) => setKilometers(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Reports (optional):</label>
        <textarea
          value={reports}
          onChange={(e) => setReports(e.target.value.split(','))}
        />
      </div>

      <button type="submit">Add Vehicle</button>
    </form>
  );
}
