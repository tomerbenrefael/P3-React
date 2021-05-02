import Login from "./LoginPage";
import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import MainPage from './MainPage';
import { useState } from 'react';

function App() {
  return (<Login />);
}
export default App;