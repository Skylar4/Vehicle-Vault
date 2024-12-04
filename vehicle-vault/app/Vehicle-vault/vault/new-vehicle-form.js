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
    <form onSubmit={handleSubmit} className='items-center justify-center flex'>
      <div className={'flex flex-col w-2/5 gap-2 justify-center'}>
      <div  className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className= {inputStyle}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>Year:</label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>License Plate:</label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>Color:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>Kilometers:</label>
        <input
          type="number"
          value={kilometers}
          onChange={(e) => setKilometers(e.target.value)}
          required
          className= {inputStyle}
        />
      </div>
{/* 
      <div className="flex items-center justify-between gap-4">
        <label className= {labelsstyle}>Reports (optional):</label>
        <textarea
          value={reports}
          onChange={(e) => setReports(e.target.value.split(','))}
          className= {inputStyle}
        />
      </div> */}

      <button type="submit" className='p-2 bg-teal-400 hover:bg-teal-600 rounded-xl'>Add Vehicle</button>
      </div>
    </form>
  );
}


