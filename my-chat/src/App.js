import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import PageAlice from './Components/Alice/PageAlice/PageAlice';
import PageJosefina from './Components/Josefina/PageJosefina/PageJosefina';
import PageVelazquez from './Components/Velazquez/PageVelaquez/PageVelazquez';



const App = (props) => {
 return (
   <BrowserRouter>
 <Navbar />
 <Routes>
 <Route path='/Alice' element={ <PageAlice dialogsData2={props.dialogsData2}/>} />
 <Route path='/Josefina' element={ <PageJosefina dialogsData={props.dialogsData}/>} />
 <Route path='/Velazquez' element={ <PageVelazquez dialogsData2={props.dialogsData2}/>} />
 </Routes>
   </BrowserRouter>

 );
}
      
export default App;



 