import React from 'react'
import img from '../assets/not-found.svg'
import {Link, useRouteError } from 'react-router-dom'
import Wrapper from '../Wrappers/ErrorPage'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  if(error.status === 404){
    return <Wrapper>
      <div>
        <img src={img} alt="Not Found Image" />
        <h1>Ohhh!</h1>
        <p>It seems that we can't find Page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  }
  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
