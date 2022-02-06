import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GithubContext, { GithubProvider } from './context/github/GithubContext';
import { createContext } from "react"


ReactDOM.render(
  <React.StrictMode>
  <>
  <App />
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
