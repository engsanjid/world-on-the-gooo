import React, { useState } from 'react';
import './country.css'
const Country = ({country,hendlevisitedcountries}) => {
    const [visited,setvisited]=useState(false)
const hendler=()=>{
    setvisited(visited? false : true)
    hendlevisitedcountries(country);
}
    return (
        <div className={`country ${visited?'country-visited':'country-not-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>{country.name.common}</h1>
            <p>Population:{country.population.population}</p>
            <p>Capital:{country.capital.capital}</p>
            <p>Region:{country.region.region}</p>
            <p>Area:{country.area.area} {country.area.area>=300000?'Big country':'Small country'}</p>
            <button onClick={hendler}>{visited?'visited':'Not visited'}</button>
        </div>
    );
};

export default Country;