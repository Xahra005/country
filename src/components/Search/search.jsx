
import React,{useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container } from "./search.style";

const Search=()=>{
    const [search,setSearch]=useState([]);
    const [inputValue,setInputValue]=useState('');
    useEffect(()=>{
        if (inputValue.trim() !== ''){
            axios
            .get(`https://restcountries.com/v3.1/name/${inputValue}`)
            .then((response)=>{
                setSearch(response.data || []);

            })
            .catch((error)=>{
                console.error('Error fetching data',error);
                setSearch([]);
            });
        }else{
            setSearch([]);
        }
    },[inputValue])

    const handleInputChange =(event)=>{
        setInputValue(event.target.value);
    }


    return(
        <Container>
            <input
            type="text" placeholder='search for a country...' value={inputValue} onChange={handleInputChange}
            />
            {search.length > 0 ?(
                <ul>
                    {search.map((item,index)=>
                    <li key={index}>
                        <p>{item.name.common}</p>
                        <img src={item.flags.png} alt =''/>

                    </li>
                    )}
                </ul>
            ):(
                <h2>No results found</h2>
            )}
        </Container>
    )
}

export default Search;