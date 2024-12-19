import React from 'react'
import { useLoaderData,Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import Wrapper from '../Wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';


const singleCocktailQuery = (id)=>{
  return {
    queryKey: ['cocktail',id],
    queryFn: async ()=>{
      const {data} = await axios.get(`${singleCocktailUrl}${id}`);
      return data
    }
  }

}


const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  export const loader =(queryClient)=>async ({params})=>{
    const {id} = params;
    // console.log(params)
    
  await queryClient.ensureQueryData(singleCocktailQuery(id))
    return {id}
  }
const Cocktail = () => {

  const {id} = useLoaderData()
  const {data} = useQuery(singleCocktailQuery(id))
  // console.log(data)
  // console.log(id)
  // if(!data) return <h4>Something went wrong</h4>
  if(!data) return <Navigate to="/" />
  const singleDrink = data.drinks[0];
  // console.log(singleDrink)
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  // const validIngredients = Object.keys(singleDrink).filter((key)=>key.startsWith('strIngredient') && singleDrink[key] !== null ).map((key)=> singleDrink)
  // console.log(validIngredients)
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  return (
    <Wrapper>
      <header>
        <Link to="/" className='btn'>Back Home
        
        </Link>
      <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img'></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {name}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          
          <p>
            <span className='drink-data'>ingredients :</span>
            {validIngredients.map((item,index)=>{
              return <span className='ing' key={index}>
                {item}{index < validIngredients.length ? ",":""}
              </span>
            })}
            
         </p>
          <p>
            <span className='drink-data'>Instruction :</span>
            {instructions}
            
         </p>
        </div>
        </div>
    </Wrapper>
  )
}

export default Cocktail
