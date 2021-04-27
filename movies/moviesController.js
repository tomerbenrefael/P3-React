// import express for rounting functionality
import { Router } from 'express'
// link to moviesUtils
import { GetAllMovies, GetAMovie, AddMovie, UpdateMovie, Delete } from './moviesUtils.js'
// link to Router function
const appRoute = Router()


// GET all
appRoute.route('/').get(async function(req,resp)
{
    let movies = await GetAllMovies()
    return resp.json(movies)
})


// GET a movie
appRoute.route('/:id').get(async function(req, resp)
{
    let id = req.params.id;
    let movie = await GetAMovie(id);
    return resp.json(movie)
})


// POST (add a movie)
appRoute.route('/').post(async function(req,resp)
{
    let newmovie = req.body;
    let result = await AddMovie(newmovie)
    return resp.json(result)
})

// PUT (update a movie)
appRoute.route('/:id').put(async function(req,resp)
{
    let id = req.params.id
    let newmovie = req.body
    let result = await UpdateMovie(id,newmovie)
    return resp.json(result)
})

// Delete a movie
appRoute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id
    let result = await Delete(id)
    return resp.json(result)
})


export default appRoute;
