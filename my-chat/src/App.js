import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import PageAlice from './Components/Alice/PageAlice/PageAlice';
import PageJosefina from './Components/Josefina/PageJosefina/PageJosefina';
import PageVelazquez from './Components/Velazquez/PageVelaquez/PageVelazquez';



const App = () => {
 return (
   <BrowserRouter>
 <Navbar />
 <Routes>
 <Route path='/Alice' element={ <PageAlice />} />
 <Route path='/Josefina' element={ <PageJosefina />} />
 <Route path='/Velazquez' element={ <PageVelazquez />} />
 </Routes>
   </BrowserRouter>

 );
}
      
export default App;



 