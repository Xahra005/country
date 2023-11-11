

import { useState,useEffect } from "react";
import { json } from "react-router-dom";
import { API_URL } from "../../API/config";
// import { API_URL } from "../../API/config";


const useCountryFetch =()=>{
    const[countries,setCountries]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    
    const getAllCountries=async()=>{
        try {
            const resolve =await fetch (`${API_URL}`)
            if (!resolve) throw new Error("something went wrong")  

            const data = await  resolve. json.stringify(countries)
           console.log(data);

            setCountries(data)
            setLoading (false)

        } catch (error) {
            setLoading(false)
            setError(error)
            
        }

        
    }
       
    // const getAllCountriesByName=async(countryName)=>{
    //     const resolve =await fetch (`{$API_URL}/name/${countryName}`)
    //     if (!resolve) throw new Error("something went wrong")

    // }
    
    
    
    
    useEffect(()=>{
        getAllCountries()
    },[ ])
    
    
    
    return (countries,isLoading,error);
    
    }
    





export default useCountryFetch;