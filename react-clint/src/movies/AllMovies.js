import { useState , useEffect } from "react";
import {Switch,Route,Link,Redirect} from 'react-router-dom'
import MovieComp from "./MovieComp";
import moviesBL from '../utils/moviesUtils'
import Button from '@material-ui/core/Button';
import React from 'react';

function AllMoviesComp(props){

  const [allMovies, SetAllMovies] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');

  const MovieList = (props) => {
    return (
      <>
        {props.movies.map((movie, index) => (
          <div className='image-container d-flex justify-content-start m-3'>
            <img src={movie.Poster} alt='movie'></img>
          </div>
        ))}
      </>
    );
  };

useEffect(() => {
  let isMounted = true; 
  async function fetchData() {
    let result = await moviesBL.getAllMovies();
    if(isMounted){
      SetAllMovies(result.data);
    }
  }
  fetchData();
  return  () => { isMounted = false };
  
}, [])

const searchForMovie = async (e) => 
{
  e.preventDefault();
  let result = await moviesBL.searchMovie(searchPhrase);
  SetAllMovies(result);
}

  return (
    <div className="App">
       <form onSubmit={e => searchForMovie(e)}>
        Search: <input type="text" onChange={e => setSearchPhrase(e.target.value)} /> &nbsp;
        <Button type="submit">Find</Button>
      </form>

      {
        allMovies.map(mov => 
          {
            return <MovieComp key={mov._id} movId={mov._id}></MovieComp>
          })
      }

    </div>
  );
}

export default AllMoviesComp;