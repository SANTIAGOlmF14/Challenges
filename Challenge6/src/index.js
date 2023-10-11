import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { GifExpertApp } from './GiftExpertApp';
//import { Father } from './Father';
import { TodoApp } from './componentes/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoApp />
    //<Father />
    //<GifExpertApp />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
