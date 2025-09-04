import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div>
      <section className='footer row m-2'>
         <p className='header-logo'>Foodieland<span className='header-dot'>.</span></p>
      <div className='col-6'>
         <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
      </div>
      <div className='col-6'>
       <nav>
        <ul className='d-flex justify-content-between'>
          <a>Recipes</a>
          <a>Blog</a>
          <a>Contact</a>
          <a>About Us</a>
        </ul>
       </nav>
      </div>
      </section>
      <hr/>
      <section>
      <div className='d-flex justify-content-center'>
      <div className='col-4'>
        {/* empty-div */}
      </div>
      <div className='col-4'>
        <p>© 2020 Flowbase. Powered by<span className='footer-webflow'>Webflow</span> </p>
      </div>
      <div className='col-4 d-flex justify-content-center'>
      <div className='d-flex gap-3 pt-1'>
         <TiSocialFacebook className='header-icon '/>
         <FaTwitter className='header-icon '/>
         <LuInstagram className='header-icon'/>
      </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Footer
