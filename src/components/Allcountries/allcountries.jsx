import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Data, Image,  Top,  Wrapper } from "./allcountries.style";




const Allcountries=()=>{



    const [data, setData] = useState(null);
 


    
    
    useEffect(() => {
       async function fetchData() {
           try {
               const response = await axios.get("https://restcountries.com/v3.1/all");
               console.log(response)
               setData(response.data);
           } catch (error) {
               console.error('Error getting data:', error);
           }
       }
       fetchData();
     }, [])



     return (
       
          
           <Wrapper>
               
               {data ? (
                   <ol>
                       {data.map((country, index) =>
                       <Top>

                       <Card>
                       <Image>
                            <img src={country.flags.png} alt="" />
                            </Image>
                       <Data>
                           <li key={index}>
                               <h3>{country.name.common}</h3>
                               <p>Area:{country.area} square kilometers</p>
                               <p>Capital:{country.capital}</p>
                               <p>Continent:{country.continents}</p>
                              



                           </li>
                           </Data>


                           </Card>
                           </Top>

                       )}
                       
                       
                       
                   </ol>
               ) : (
                   <p>Loading...</p>
               )}


        
           </Wrapper>
           )
       

}

    
    

















export default Allcountries;












// import React ,{ useState } from "react"
// import { useEffect } from "react"
// import { Bottom, Card, Data, Image, Top, Wrapper } from "./allcountries.style";
// import endpoint from "../../API/endpoint";



// const Allcountries=()=>{




//     const [countries, setCountries] = useState([]);
//     const [isLoading, setLoading] = useState(true);
//     const [error, setError] = useState('');


//     const fetchCountries= async ( page,countries = '') =>{
//         try{
//             setError(false);
//             setLoading(true);

//             const country= await endpoint.fetchCountries(countries);

//             setCountries(prev => ({
//                 ...country,
//                 results:
//                 page > 1 ? [...prev.results] : [...country.results]
//             }));
//         }catch(err){
//             setError(true);
//         }
//         setLoading(false);




//     }

//     useEffect(()=>{ 
//      fetchCountries(countries)
//     },[countries])





//     return (
//         <>
//             <Wrapper>
//                 <Top>
//                     <Bottom>
//                         {isLoading && !error && <h4>Loading.....</h4>}
//                         {error && !isLoading && <h4>{error}</h4>}

             
//                         {countries ?.map(country =>(
                            
//                             <Card>
//                                 <Image>
//                                     <img src={country.flag.png} alt=''/>
                                     
//                                 </Image>
//                                 <Data>
//                                     <h3>{country.name.common}</h3>
//                                     <h3> Population:{country.population}</h3>
//                                 </Data>
//                             </Card>
//                         ))
//                         }



//                     </Bottom>

//                 </Top>
//             </Wrapper>
//         </>
//     )




// }









//     const getAllCountries= async ( countries) => {
//         try {
//             const resolve = await fetch(`${API_URL}`)
//             if (!resolve) throw new Error("something went wrong")

//             const data = await resolve.json()
//             console.log(data);

//             setCountries(data)
//             setLoading(false)

//         } catch (error) {
//             setLoading(false)
//             setError(error.message)

//         }



//     }


//     useEffect(() => {
//         getAllCountries()
//     }, [])

//     // const getAllCountriesByName=async(countryName)=>{
//     //     const resolve =await fetch (`{$API_URL}/name/${countryName}`)
//     //     if (!resolve) throw new Error("something went wrong")

//     // }

    









// }











