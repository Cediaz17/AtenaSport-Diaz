import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/Cart-Context.js';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAq-hs0kKLA_wWGraYe8oxOcQEaLqokW9g",
  authDomain: "ateneasport2022.firebaseapp.com",
  projectId: "ateneasport2022",
  storageBucket: "ateneasport2022.appspot.com",
  messagingSenderId: "606692297213",
  appId: "1:606692297213:web:51ed310ba199784427b194"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
