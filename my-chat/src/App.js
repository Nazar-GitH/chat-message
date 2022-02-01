import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
 return (
   <BrowserRouter>
  <div className='primary'>
    <Header />
    <Main />
    <Sidebar />

    <Main />
  </div>
  </BrowserRouter>
 );
}


         
     


export default App;
