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
  const labelsstyle = 'text-black border-black';
  const inputStyle = 'border-2 border-black rounded-xl text-black';
  return (
    <form onSubmit={handleSubmit}>
      <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
      <div >
        <label className= {labelsstyle}>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className= {inputStyle}
        />
      </div>

      <div >
        <label className= {labelsstyle}>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div>
        <label className= {labelsstyle}>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div>
        <label className= {labelsstyle}>License Plate:</label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div>
        <label className= {labelsstyle}>Color:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div>
        <label className= {labelsstyle}>Kilometers:</label>
        <input
          type="number"
          value={kilometers}
          onChange={(e) => setKilometers(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div>
        <label className= {labelsstyle}>Reports (optional):</label>
        <textarea
          value={reports}
          onChange={(e) => setReports(e.target.value.split(','))}
          className= {inputStyle}
        />
      </div>

      <button type="submit" className='p-2 bg-red-500 rounded'>Add Vehicle</button>
      </div>
    </form>
  );
}


