import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {src: 'https://s1.1zoom.me/big0/700/Gray_background_Brunette_girl_Hair_Smile_Glance_563423_1280x872.jpg', text: 'You are the worst', data: '1 hour ago' }
]
let dialogsData2 = [
  { src: 'https://media.istockphoto.com/photos/real-woman-picture-id1198027123?b=1&k=20&m=1198027123&s=170667a&w=0&h=aXmAB1C93akXzJlXQx6ldCVT3I3nUReQHT-myoCxmCI=', text: 'We are losing money! Quick', data: '2 hour ago' }
]
let dialogsData3 = [
  {src: 'https://media.istockphoto.com/photos/handsome-in-spectacles-picture-id656673020?k=20&m=656673020&s=612x612&w=0&h=kJ5fq_Exi0FG0yw7tqwTdfXuUPBac0o0eH3kSyQyxWs=', text: 'Quickly come to the meeting room 1B', data: '3 hour ago' }
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} dialogsData2={dialogsData2} dialogsData3={dialogsData3}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
