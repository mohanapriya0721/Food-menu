import React from 'react'
import cutvegetable from "../assets/images/cutvegetable.png"
import foodbowl from "../assets/images/foodbowl.png"

const Cardletter = () => {
  return (
    <div>
      <div className='card-div d-flex justify-content-center gap-3'>
        <img className='cutveg-img' src={cutvegetable} />
        <div className='card-details '>
          <p className='card-title mb-3'>Deliciousness to your inbox</p>
          <p className='card-para'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <div className='form-letter  mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-md-start p-2'>
            <input className='card-email p-2 me-sm-2 mb-2 mb-sm-0' type='email' placeholder=' Your Email Address...'></input>
            <button className='card-button '>Subscribe</button>
          </div>
        </div>
        <div className='col-md-4 d-none d-md-block text-end'>
          <img className='foodbowl-img' src={foodbowl} />
        </div>
      </div>

    </div>
  )
}

export default Cardletter



