import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import PageAlice from './Components/Alice/PageAlice/PageAlice';
import PageJosefina from './Components/Josefina/PageJosefina/PageJosefina';
import PageVelazquez from './Components/Velazquez/PageVelaquez/PageVelazquez';



const App = (props) => {
 return (
   <>
 <Navbar />
 <Routes>
 <Route path='/Alice' element={ <PageAlice dialogsData2={props.state.dialogsData2} addMessage={props.addMessage}/>} />
 <Route path='/Josefina' element={ <PageJosefina dialogsData={props.state.dialogsData} addMessage={props.addMessage}/>} />
 <Route path='/Velazquez' element={ <PageVelazquez dialogsData2={props.state.dialogsData2}/>} />
 </Routes>
 </>

 );
}
      
export default App;



 