import React from 'react'
import NavBar from '../componants/navbar'

export default function About() {
  return (

      
      <div>
        <NavBar/>
        <div className='text-center mt-4'>
          <div className=' items-center justify-center'>
        <h1 className=' text-7xl text-white '>Vehicle Vault</h1>
        <div className='w-2/3 mx-auto mt-4'>
        <p className='text-white text-lg'>My goal with vehicle vault was to create a service for people that like to do their own repairs.
        Keeping track of how long, the cost, part numbers, and when a service was done can be tiresome and costly if you lose the book or notes you were keeping track of it in.
        It is always a pain to have to go back and look up the type of oil you need, or the filter number so this allows you easily track them</p>
        <h2 className='text-6xl text-white mt-4'>How To Use It</h2>
        <ol className=' text-white text-xl mt-4'>
          <li>1. click on &apos;Your Vault&apos;</li>
          <li>2. click on add vehicle</li>
          <li>3. Fill out the information for your vehicle</li>
          <li>4. click on add vehicle</li>
          <li>5. click on the new box </li>
          <li>6. start adding repairs!</li>
          <li>for fun you can go to your home page and track the number of repairs you&apos;ve made.</li>
        </ol>
        </div>
        </div>
        </div>


      </div>

  )
}
