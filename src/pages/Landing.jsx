import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'



const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ()=>{
  const searchTerm = 'margarita'
  const response =  await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // console.log(response)
  return {drinks: response.data.drinks,searchTerm}  
}

const Landing = () => {
  const {drinks,searchTerm} = useLoaderData()
  console.log(drinks)

  
  return (
    <div>
      <h1>Landing</h1>
      <Link to="/">Home Page</Link>
    </div>
  )
}

export default Landing
