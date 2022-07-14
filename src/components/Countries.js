import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = "https://restcountries.com/v3.1/all"

const Countries = () => {
    const [countries, setCountries] = useState([])
        const fetchCountryData = async ()=>{
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
            console.log(countries);
        }
        useEffect(() => {
            fetchCountryData()

    }, [])
    
  return (
    <>
    <section className="grid"> 
    {countries.map((country) =>{
        const { name, population ,region ,capital, flags, area } = country
console.log(country);
        return(
            <article key= {area}>
                <div>
                    <img src={flags.png} alt={name}/>
                    <div className="items">
                    <h3>{name.official}</h3>
                    <h4>Population:<span>{population}</span></h4>
                    <h4>Region:<span>{region}</span></h4>
                    {/* <h4>Capital:<span>{capital[0]}</span></h4> */}
                    </div>
                    <Link to={`/countries/${name}`}>Learn more</Link>
                </div>
            </article>
        )
    })}
    </section>
    
    </>

  )
}
export default Countries