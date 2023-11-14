import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Allcountries from './components/Allcountries/allcountries';

import './App.css';
import CountryInfo from './components/countryinfo/countryInfo';
import Search from './components/Search/search';

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
        <h1>Zara's Tour</h1>

      </div>


      

    </div>
   
<Allcountries/>

<Search/>


      </>
   
  );
}

export default App;
