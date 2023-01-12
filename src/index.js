import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './components/context/cartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzvmt1_hYoZkpSGEDG2IV1mRAxNkm7DjQ",
  authDomain: "react43550-a5d4c.firebaseapp.com",
  projectId: "react43550-a5d4c",
  storageBucket: "react43550-a5d4c.appspot.com",
  messagingSenderId: "796901936649",
  appId: "1:796901936649:web:90659a3be8d8d62e1032d8"
};

const app = initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
