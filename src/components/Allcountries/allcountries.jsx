// import React ,{ useState } from "react"
// import { useEffect } from "react";
import React, { useEffect, useState } from "react";
import { Bottom, Card, Data, Image, Top, Wrapper } from "./allcountries.style";
import endpoint from "../../API/endpoint";



const Allcountries=()=>{




    const [countries, setCountries] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');


    const fetchCountries= async ( page,countries = '') =>{
        try{
            setError(false);
            setLoading(true);

            const country= await endpoint.fetchCountries(countries);

            setCountries(prev => ({
                ...country,
                results:
                page > 1 ? [...prev.results] : [...country.results]
            }));
        }catch(err){
            setError(true);
        }
        setLoading(false);




    }

    useEffect(()=>{ 
     fetchCountries(countries)
    },[countries])





    return (
        <>
            <Wrapper>
                <Top>
                    <Bottom>
                        {isLoading && !error && <h4>Loading.....</h4>}
                        {error && !isLoading && <h4>{error}</h4>}

             
                        {countries ?.map(country =>(
                            
                            <Card>
                                <Image>
                                    <img src={country.flag.png} alt=''/>
                                     
                                </Image>
                                <Data>
                                    <h3>{country.name.common}</h3>
                                    <h3> Population:{country.population}</h3>
                                </Data>
                            </Card>
                        ))
                        }



                    </Bottom>

                </Top>
            </Wrapper>
        </>
    )




}
export default Allcountries;








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











