import {
   
    API_URL,
    API_KEY,
    CAPITAL_URL,
    
  } from './config';


  const defaultConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      
    }
  };


  const endpoint={
      fetchCountries :async (countries )=>{
 

        const endpoint = countries
        ? `${API_URL}${countries}`
        : `${CAPITAL_URL}`;
      return await (await fetch(endpoint)).json();
    },
      }
  


  export default endpoint;