import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CocktailList from '../Components/CocktailList';
import SearchForm from '../Components/SearchForm';
import { useQuery } from '@tanstack/react-query';



const cocktailSearchUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailQuery =(searchTerm)=>{
  return {
    queryKey:['search',searchTerm,'all'],
    queryFn: async ()=>{
      const response =  await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return  response.data.drinks
    }
  }

}

export const loader = (queryClient)=>async ({request})=>{
  const url = new URL(request.url)
  
  const searchTerm = url.searchParams.get("search")||'win';
  await queryClient.ensureQueryData(searchCocktailQuery(searchTerm))
  
  // console.log(response)
  return {searchTerm}  
}

const Landing = () => {
  const { searchTerm} = useLoaderData()
  // console.log(drinks)

  const {data: drinks} = useQuery(searchCocktailQuery(searchTerm))

  // if(isLoading) return <h4>LOADING .....</h4>
  return (
    <>
    <SearchForm  searchTerm={searchTerm}/>
    <CocktailList drinks={drinks}/>
    </>
  )
}

export default Landing
