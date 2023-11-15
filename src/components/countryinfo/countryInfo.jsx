import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Data, Wrapper } from "./countryInfo.styles";


const CountryInfo =()=>{
    const [info,setInfo]=useState();

    useEffect(()=>{
        async function fetchInfo() {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                console.log(response)
                setInfo(response.info);
            } catch (error) {
                console.error('Error getting data:', error);
            }
        }
        fetchInfo()
    }
    
    ,[])
    return(


        <Wrapper>
               
               {info ? (
                   <ol>
                       {info.map((country, index) =>
                       

                       
                       <Data>
                           <li key={index}>
                               <h3>{country.name.common}</h3>
                               <p>Area:{country.area} square kilometers</p>
                               <p>Capital:{country.capital}</p>
                               <p>Continent:{country.continents}</p>
                               <p> Population:{country.population}</p>

                           </li>
                           </Data>
                       )}
                   </ol>
               ) : (
                   <p>Loading...</p>
               )}
           </Wrapper>
           )
       
               }

export default CountryInfo;