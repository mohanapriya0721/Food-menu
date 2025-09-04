import React from 'react'
import "../assets/css/home.css"
import Header from './Header'
import Cardletter from './Cardletter'
import Form from './Form'
import Footer from './Footer'
import Paper from "../assets/images/paper.png"
import foodplate from "../assets/images/foodplate.png"
import heroimg from "../assets/images/heroimg.png"
import handpic from "../assets/images/handpic.png"
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";
import { GoPlay } from "react-icons/go";
import rice from "../assets/images/rice.png"
import cabbage from "../assets/images/cabbage.png"
import meat from "../assets/images/meat.png"
import cake from "../assets/images/cake.png"
import sandwich from "../assets/images/sandwich.png"
import chocolate from "../assets/images/chocolate.png"
import burger from "../assets/images/burger.png"
import fish from "../assets/images/fish.png"
import pancake from "../assets/images/pancake.png"
import chef from "../assets/images/chef.svg"
import snack from "../assets/images/snack.png"
import meatball from "../assets/images/meatball.png"
import orangepancake from "../assets/images/orangepancake.png"
import chickenrice from "../assets/images/chickenrice.png"
import noodles from "../assets/images/noodles.png"
import spicyfish from "../assets/images/spicyfish.jpg"
import ads from "../assets/images/ads.svg"
import { Link } from 'react-router-dom'

const Home = () => {
    const CategoryCard = ({ icon, label }) => {
        return (
            <div className='category-card'>
                <div className='category-icon'>
                    <img src={icon} alt={label} />
                </div>
                <div className='category-label'>{label}</div>
            </div>
        );
    };



    return (
        <>
            <section className='full-width'>
                  <section className='overflow-hidden'>
                     <Header /> 
                </section>  
                {/* hero section  */}
                  <section className="padding-aline pt-3">
                    <section className='d-flex'>
                        <div className='exchange-div1'></div>
                        <div className="wid-50 ">
                            <div className="px-4 mt-2 ">
                                <div className='white-circle mb-4'>
                                    <div className='paper-icon'>
                                        <img src={Paper} />
                                    </div>
                                    <div>Hot Recipes</div>
                                </div>
                                <div className='spicy-font'><h2 className=" text-font mt-3 fw-bold">
                                    Spicy delicious<br />chicken wings</h2></div>
                                <div className='para-box mt-4'><p className="para-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
                                </p></div>
                                <div className="d-flex gap-3 mt-3">
                                    <div className='box-1'>
                                        <div className='icon-1'><PiTimerFill className='timer-icon ' />
                                            30 Minutes</div></div>
                                    <div className='box-2'>
                                        <div className='icon-2'><PiForkKnifeFill className='spoon-icon' />
                                            Chicken</div></div>
                                </div>
                            </div>
                            <div className='d-flex mt-5 '>
                                <div className="person-details d-flex gap-3 mt-5 ">
                                    <img src={heroimg} className="rounded-circle" width="50" height="50" />
                                    <div className='name-john'><strong className='name-spell'>John Smith</strong>
                                        <p className="text-muted" style={{ fontSize: '0.8rem' }}>15 March 2022</p></div>

                                </div>
                                <button className='box-3 flex-end mt-5 '>
                                    <div className='inner-box-3  '>
                                        <Link to="/recipe" className='recipes-word pb-1'>View Recipes </Link>
                                        <div className='play-symbl ml-3'><GoPlay className='play-icon' /></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='hand-pic'>
                            <img src={handpic}></img>
                        </div>
                        <div className='wid-40'>
                            <img src={foodplate} />
                        </div>
                    </section>
                </section>   
                {/* category section*/}
                  <section className='padding-aline mt-5' >
                    <div className='category-box'>
                        <div className=' d-flex justify-content-between align-items-center mb-4'>
                            <h1 className='category-title '>Categories</h1>
                            <button className='category-button'>View All Categories</button>
                        </div>
                        <div className='category-grid'>
                            <CategoryCard icon={rice} label="Breakfast" />
                            <CategoryCard icon={cabbage} label="Vegan" />
                            <CategoryCard icon={meat} label="Meat" />
                            <CategoryCard icon={cake} label="Dessert" />
                            <CategoryCard icon={sandwich} label="Lunch" />
                            <CategoryCard icon={chocolate} label="Chocolate" />
                        </div>
                    </div>
                </section>  
                {/* simple and tasty section */}
                <section className='w-full padding-aline mt-5'>
                    <div className='simple-title '>
                        <p className='h2'>Simple and tasty recipes</p></div>
                    <div className='para-lorem mb-5'>
                        <p className='p-tag'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p></div>
                    <div className='d-flex justify-content-center flex-wrap gap-4'>
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={burger} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Big and juicy wagyu beef cheeseburge</p></div>
                            </div>
                            <div className='d-flex flex-wrap  gap-3 p-3'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={fish} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Fresh Lime Roasted Salmon </p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-3'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={pancake} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Banana Oatmeal Pancake with Honey</p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-3'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div className='d-flex flex-wrap justify-content-center gap-4 mt-5'>
                        <div className='card'>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={snack} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Salad mix bowl with fresh vegetable</p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-0'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={meatball} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Soft meatball roast</p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-4'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div> 
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={spicyfish} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Spicy fish fry (kerala spl)</p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-0'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div> 
                    </div> 

                     <div className='d-flex flex-wrap justify-content-center gap-4 mt-5'>
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={orangepancake} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Orange pancake with blueberries </p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-0'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={chickenrice} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Chicken steam rice with cocount milk</p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-0'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                        <div className='card '>
                            <div className='card-img d-flex justify-content-center pt-3'>
                                <img src={noodles} />
                            </div>
                            <div className='card-title-div mt-3 '>
                                <div className='card-title p-3'>
                                    <p>Italy noodles with topings small tomato</p></div>
                            </div>
                            <div className='d-flex gap-3 p-3 pt-0'>
                                <div className='timer-div d-flex gap-2'>
                                    <PiTimerFill className='timer-icon ' />
                                    <p>30 Minutes</p>
                                </div>
                                <div className='snack-div d-flex gap-2'>
                                    <PiForkKnifeFill className='spoon-icon' />
                                    <p>Snack</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section> 
                {/* chef-poster */}
                  <section className='padding-aline mt-5'>
                    <div className='d-flex justify-content-center m-4'>
                        <div className='chef-div d-flex flex-column justify-content-center'>
                            <div className='chef-title'>
                                <p>Everyone can be a
                                    chef in their own kitchen</p>
                            </div>
                            <div className='chef-para'>
                                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            </div>
                            <button className='button-box mt-5'> Learn More</button>
                        </div>
                        <div className='chef-img mt-3 d-flex justify-content-left'>
                            <img src={chef} />
                        </div>
                    </div>
                </section> 
                {/* cardletter-div */}
               <section className='padding-aline mt-5'>
                    <Cardletter />
                </section>
                <section className='padding-aline mt-5'>
                    <Form />
                </section> 
                {/* footer */}
                 <section className='padding-aline mt-5'>
                    <Footer />
                 </section>  

            </section >
        </>
    );
};
export default Home;



