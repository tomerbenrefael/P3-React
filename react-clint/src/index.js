import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import AllMembersComp from './members/AllMembers';
import MainComp from './MainPage';


ReactDOM.render(
  <BrowserRouter>
     <Switch>
      <Route path="/members" component={AllMembersComp} /> 
      <Route path="/main" component={MainComp} />  
      <Route exact path="/" component={App} />  
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



reportWebVitals();