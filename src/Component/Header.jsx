import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import login from './Login';



const Header = () => {
    return (
        <section className='container-fluid bg-light shadow-sm'>
            <div className='d-flex align-items-center justify-content-between py-2 px-4'>
                <div>
                    <p className='header-logo h4 fw-bold fst-italic m-0'>Foodieland<span className='header-dot'>.</span></p>
                </div>

                <nav>
                    <ul className='d-flex gap-5 justify-content-between' >
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recipess">Recipes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About us</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='d-flex align-items-center gap-3'>
                        <TiSocialFacebook className='fs-4 cursor-pointer' />
                        <FaTwitter className='fs-4 cursor-pointer' />
                        <LuInstagram className='fs-4 cursor-pointer' />
                        <NavLink className='nav-link' to='/login'><button onClick={() => login} className='btn btn-outline-primary ms-2'>Login</button></NavLink>
                </div>
            </div>
        </section>
    )
}

export default Header



