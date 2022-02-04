import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMessage } from './redux/state';
import { BrowserRouter} from 'react-router-dom'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={state} addMessage={addMessage}/>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

reportWebVitals();
