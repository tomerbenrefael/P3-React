import LoginComp from './LoginPage';
import {Switch, Route} from 'react-router-dom'

import Button from '@material-ui/core/Button';
import MainMoviesComp from './movies/MainMovies';
import MainSubsComp from './members/MainSubs';

function MainComp(props) {

  useEffect(() => {
    props.history.push('/main/movies')

  },[props.history])

  const navToAllMovies = ()=> 
{
  props.history.push('/main/movies')

}

const navToAllMembers = ()=> 
{
  props.history.push('/main/subs')

}

const logOut = ()=> 
{
  props.history.push('/')
}
  return (
    <div className="App">
      <nav>
      MERN Stack App
      </nav>
    <h2>Movies WebSite</h2>
    <Button variant="outlined" onClick={navToAllMovies}>
      Movies
    </Button> &nbsp;
    <Button variant="outlined" onClick={navToAllMembers}>
      Subscriptions
    </Button> &nbsp;
      <Button variant="outlined" onClick={logOut}>Log Out</Button> <br/><br/>
       <Switch>
      <Route path="/main/movies" component={MainMoviesComp} /> 
      <Route path="/main/subs" component={MainSubsComp} />  
      <Route exact path="/" component={LoginComp} />  
       </Switch>
    </div>
  );
}

export default MainComp;