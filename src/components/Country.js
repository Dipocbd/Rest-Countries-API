import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Country = () => {

const[country, setCountry] = useState([])
const {name} = useParams()

 useEffect(() =>{
  const fetchCountry = async ()=>{
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    const country = await response.json()
    setCountry(country)
    console.log(country)
  }

    fetchCountry()
 } , [])

  return (
    <>
    <Link to="/" className='btn btn-light'>
      <i className="fas fa-arrow-left"></i>Back Home
    </Link>
    <h1>Country Data</h1>
    </>
  )
}

export default Country
