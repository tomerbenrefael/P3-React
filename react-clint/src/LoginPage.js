import './App.css';
import userBL from './utils/userUtils';
import { useState } from "react";
import {withRouter} from "react-router-dom";
import React from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';





function LoginComp(props) {
  const [userName , setUserName] = useState('');
  const [userPwd , setUserPwd] = useState('');
  const [userNotValid, setUserNotValid] = useState(false)

  const checkLogin = async (e) => 
  {
    e.preventDefault();
    let result = await userBL.isAllowedToLogin(userName, userPwd);


    if(result.allowedToLogin)
    {
      sessionStorage["fullName"] = result.fullName;
      props.history.push('/main')
    }
    else
    {
      setUserNotValid(true)
    }
  }

  return (
    <div className="App">
<h4>Login Manually</h4>
        <br/>
        <form onSubmit={e => checkLogin(e)}>
          User Name: <input type="text" onChange={e => setUserName(e.target.value)} /> <br/>
          Password: <input type="text" onChange={e => setUserPwd(e.target.value)} /> <br/>
          <Button color="primary" variant="contained"  type="submit">
          Save
        </Button>
        </form>

    <p style={{ visibility: userNotValid ? 'visible' : 'hidden' , color: 'red'}}>Values are wrong, please try again :)</p>
    </div>
  );
}

export default withRouter(LoginComp);