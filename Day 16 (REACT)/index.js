import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LifecycleTracker from './App';
import reportWebVitals from './reportWebVitals';
import Addition from './Assignment1.js';
import Factorial from './Assign1fact.js';
import UserDetailsForm from './Assignment4.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <LifecycleTracker />
     <Addition num1 = "12" num2 = "10" num3 = "22"></Addition>
     <Factorial num3 = "5" />
     <UserDetailsForm />
    </>

  </React.StrictMode>

       
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
