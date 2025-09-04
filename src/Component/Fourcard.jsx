import React from 'react'
import fruitsalad from '../assets/images/fruitsalad.png'
import beefmeat from '../assets/images/beefmeat.png'
import eggrice from '../assets/images/eggrice.png'
import chickenroll from '../assets/images/chickenroll.png'
import { PiTimerFill } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";


const Fourcard = () => {
    return (

        <section className='fourdcard-section'>

            <p className='h2 fourcard-title text-center pb-5'>Check out the delicious recipe</p>
                    <div className='padding-aline d-flex gap-4 mt-3'>
            <div className='fruitsalad-div'>
                    <img className='fruitsalad-img' src={fruitsalad}></img>
                <p className='h5 fruitsalad-title pt-3 '>Mixed Tropical Fruit Salad with Superfood Boosts </p>
                <div className='d-flex gap-3 pt-0 '>
                    <div className='timer-div d-flex gap-2'>
                      <PiTimerFill className='timer-icon ' /><p>30 minutes</p>
                    </div>
                    <div className='snack-div d-flex gap-2'>
                      <PiForkKnifeFill className='spoon-icon' /><p>Snack</p>
                    </div>
                </div>
            </div>
             <div className='beefmeat-div'>
                    <img className='beefmeat-img' src={beefmeat}></img>
                <p className='h5 beefmeat-title pt-3 '>Big and Juicy Wagyu Beef Cheeseburger</p>
                <div className='d-flex gap-3 pt-0 '>
                    <div className='timer-div d-flex gap-2'>
                      <PiTimerFill className='timer-icon ' /><p>30 minutes</p>
                    </div>
                    <div className='snack-div d-flex gap-2'>
                      <PiForkKnifeFill className='spoon-icon' /><p>Snack</p>
                    </div>
                </div>
            </div>
             <div className='eggrice-div'>
                    <img className='eggrice-img' src={eggrice}></img>
                <p className='h5 eggrice-title pt-3 '>Healthy Japanese Fried Rice with Asparagus</p>
                <div className='d-flex gap-3 pt-0 '>
                    <div className='timer-div d-flex gap-2'>
                      <PiTimerFill className='timer-icon ' /><p>30 minutes</p>
                    </div>
                    <div className='snack-div d-flex gap-2'>
                      <PiForkKnifeFill className='spoon-icon' /><p>Snack</p>
                    </div>
                </div>
            </div>
             <div className='chickenroll-div'>
                    <img className='chickenroll-img' src={chickenroll}></img>
                <p className='h5 chickenroll-title pt-3 '>Cauliflower Walnut Vegetarian Taco Meat</p>
                <div className='d-flex gap-3 pt-0 '>
                    <div className='timer-div d-flex gap-2'>
                      <PiTimerFill className='timer-icon ' /><p>30 minutes</p>
                    </div>
                    <div className='snack-div d-flex gap-2'>
                      <PiForkKnifeFill className='spoon-icon' /><p>Snack</p>
                    </div>
                </div>
            </div> 
        </div>

        </section>
        

    )
}

export default Fourcard
