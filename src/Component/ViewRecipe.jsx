import React, { useState ,useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ViewRecipe = () => {
  const {id}= useParams();
  console.log("id",id)
   
     const [data,setData]=useState([])
  console.log(data);

  const getApi = async () => {
    try{
       const response = await axios .get(`https://dummyjson.com/recipes/${id}`)
       console.log("response",response)
       setData(response?.data)
  }
  catch (error){
    console.log("fetching error:",error)
  }
}
useEffect(() => {
  getApi();
},[]);

  return (
    <div>
      <Header />
      <h2 className='text-center mb-5 viewrecipe-heading '>View Recipes</h2>
      <div className='d-flex gap-5'>
        <div className='viewrecipe-div1'>
        <img src={data.image} className='veiwrecipe-img-1  '/>
        </div>
        <div className='veiwrecipe-div2'>
            <h3>{data.name}</h3>
            <p><strong>Type: </strong>{data.cuisine}</p> 
            <p><strong>Calories: </strong>{data.caloriesPerServing}g</p> 
            <p><strong>Level: </strong>{data.difficulty}</p>
            <p><strong>Rating: </strong>{data.rating}/5</p>
            <button className='h4 border rounded bg-dark text-white px-2 py-1 fw-5'> 😍 Like </button>
        </div>
        <div className='viewrecipe-div3'>
           <p><strong>Cooking Time: </strong>{data.cookTimeMinutes}min</p>
           <p><strong>preparing Time: </strong>{data.prepTimeMinutes}min</p>
           <p><strong>Ingredients: </strong>{data.ingredients}</p>
           <p><strong>Instructions: </strong>{data.instructions}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default ViewRecipe
