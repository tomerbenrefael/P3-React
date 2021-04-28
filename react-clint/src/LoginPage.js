import './App.css';
import userBL from './utils/userUtils';
import { useState } from "react";
import {withRouter} from "react-router-dom";

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
          <div className='form-group'>
          User Name: <input type="text" onChange={e => setUserName(e.target.value)} /> <br/>
          </div>
          <div className='form-group'>
          Password: <input type="text" onChange={e => setUserPwd(e.target.value)} /> <br/>
          </div>
          <button type="submit" className='btn btn-primary right-btn'>Log in</button>
        </form>
    <p style={{ visibility: userNotValid ? 'visible' : 'hidden' , color: 'red'}}>
      One of the values are wrong, pls try again 
    </p>

    </div>
  );
}

export default withRouter(LoginComp);