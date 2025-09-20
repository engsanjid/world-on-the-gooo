import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({countriesPromise}) => {
  
  
    const [visitedcountries,setvisitedcountries]=useState([])

  const hendlevisitedcountries=(country)=>{
       const newvisitedcountries=[...visitedcountries,country]
       setvisitedcountries(newvisitedcountries);
  }


    const countriesData=use(countriesPromise)
    const countries=countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h1>In tha countries {countries.length}</h1>
            <h1>Total Visited Country:{visitedcountries.length}</h1>
           <ol>
             {
                visitedcountries.map(country=><li>{country.name.common}</li>)
            }
           </ol>
            <div className='countries'>
                {
                countries.map(country=><Country 
                    key={country.cca3.cca3}
                    hendlevisitedcountries={hendlevisitedcountries}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;