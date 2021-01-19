import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Your web app's Firebase configuration
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDgVxxbwcPm59Ea2NUwNaR_70h9gTEDIjI",
    authDomain: "chat-react-bf9ae.firebaseapp.com",
    projectId: "chat-react-bf9ae",
    storageBucket: "chat-react-bf9ae.appspot.com",
    messagingSenderId: "724727069942",
    appId: "1:724727069942:web:9a29c700901dcd864000d7",
    measurementId: "G-EQVGFLLTG9"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Context.Provider value={{
              firebase,
              auth,
              firestore
          }}>
              <App/>
          </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
