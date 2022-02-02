import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Messenger from './Components/messenger/Messenger';


const App = () => {
 return (
   <BrowserRouter>
 <Messenger/>
   </BrowserRouter>
    /* /* <div className='primary'> */
    /* <Header />
    <Main />
    <Sidebar /> */
    /* <Main /> */
  /* </div> */ 

 );
}
      
export default App;



 