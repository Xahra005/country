import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Allcountries from './components/Allcountries/allcountries';

import './App.css';
import CountryInfo from './components/countryinfo/countryInfo';
import Grid from './components/Grid/grid';

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
        <h1>Zara's Tour</h1>

      </div>
    </div>
    {/* <div className="image">
      <img src="/Image/clo"/>
    </div> */}
    <Router>
      <Routes>
      <Route exact path="/"element={Allcountries}  ></Route>
      <Route exact path="/country/countryInfo"element={<CountryInfo/>}  ></Route>
      

      </Routes>

    </Router>
    <Grid/>
      </>
   
  );
}

export default App;
