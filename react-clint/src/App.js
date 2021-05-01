import Login from "./LoginPage";
import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import MainPage from './MainPage';
import { useState } from 'react';

function App() {

  const [token,setToken]= useState();
  if(!token){
   return <Login setToken={setToken} />   
  }
  return (
    <div>
           <BrowserRouter>
            <MainPage setToken={setToken} />
            </BrowserRouter>
    </div>
  );
}


}
export default App;