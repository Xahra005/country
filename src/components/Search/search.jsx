
import React,{useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import { Container } from "./search.style";

const Search=()=>{
    const [search,setSearch]=useState([])

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/name/eesti')
        .then((response)=>{setSearch(response.data.results)})
    },[])
 
    return(
        <Container>
            <input type="text"/>
            {search.map((Item)=>{
                return<h4>{Item.name}</h4>
            })}
        </Container>
    )
}
    

export default Search;