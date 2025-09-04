import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Login = () => {
  return (
    <div>
      <Header/>
      <p className='text-center fw-bold fs-3 login-heading'>Login In</p>
      <div>
        <div className='login-box2 m-5'>
          <div className='d-flex gap-5 '>
           <div>
          <label htmlFor='First Name:'>First Name </label>
          <input type='text' id='First Name:' ></input>
          </div>
          <div>
          <label htmlFor='Last Name:'>Last Name</label>
          <input type='text' id='Last Name:'></input>
          </div>
          </div>

          <div className='d-flex gap-5 mt-4  '>
            <div>
            <label htmlFor='Email:'>Email </label>
            <input type='email' id='Email:'></input>
            </div>
            <div>
            <label htmlFor='Phone No:'>Phone No </label>
            <input type='number' id='Phone No:'></input>
            </div>
          </div>
    
          <div className='d-flex gap-5 mt-4'>
            <div>
            <label htmlFor='DOB:'>DOB </label>
            <input type='date' id='DOB:'></input>
            </div>
            <div>
            <label htmlFor='Street'>Street </label>
            <input type='text' id='Street'></input>
            </div>
          </div>
          <div>
            <button className='login-button'>Submit</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
