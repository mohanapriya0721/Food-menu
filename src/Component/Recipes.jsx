import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Await } from 'react-router-dom'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


const Recipes = () => {
  const navigate = useNavigate(); 

  const [data,setData]=useState([])
  console.log(data);

  const getApi = async () => {
    try{
       const response = await axios .get('https://dummyjson.com/recipes')
       setData(response?.data?.recipes)
  }
  catch (error){
    console.log("fetching error:",error)
  }
}
useEffect(() => {
  getApi();
},[]);
  
function onclickcard (id){
  console.log("item",id)
  navigate(`view-recipe/${id}`)
}
  return (
    <div>
      <Header />
      <div className='recipe_heading'>
        <p className=' h2 text-center'>Recipes</p>
      </div>
      <div>
        <p className=' h4 text-center'>All type of recipes foods are covered.</p>
      </div>
      <div className='d-flex flex-wrap'>
        {data?.map(item =>{
        //  console.log(item);
             return(
              <>
              <div className='recipes-page'>
                <img className='img-fluid '
                src={item.image}
                alt={item.name}

                 />
                 <div className='recipes-name'>{item.name}</div>
                 <div className='recipes-cooktime'>
                  <p>Cooking Time:{item.cookTimeMinutes}mins</p>
                 </div>
                 <button onClick={()=>onclickcard(item.id)} className='recipes-button border border-secondary'>View Recipes</button>
              </div>
              </>
             )
        })}
      </div>
    </div>
  )
}

export default Recipes
