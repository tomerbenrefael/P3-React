// import express for rounting functionality
import { Router } from 'express'
// link to moviesUtils
import { GetAllSubscriptions, AddSubscriptions, GetMoviesByMember, GetMembersByMovie } from './subscriptionsUtils.js'
// link to Router function
const appRoute = Router()


// GET all
appRoute.route('/').get(async function(req,resp)
{
    let subscriptions = await GetAllSubscriptions()
    return resp.json(subscriptions)
})

// POST (add a movie)
appRoute.route('/').post(async function(req,resp)
{
    let newSub = req.body;
    console.log(`${JSON.stringify(newSub)}`);
    let result = await AddSubscriptions(newSub)
    return resp.json(result)
})

// get movies by member id
appRoute.route('/member/:id').get(async function(req,resp)
{
    if(!req.params.id.includes('undefined'))
    {
        let movies = await GetMoviesByMember(req.params.id)
        return resp.json(movies)
    }
    console.log('failed to get movies by member id');
})

// get members by movie id
appRoute.route('/movie/:id').get(async function(req,resp)
{
    if(!req.params.id.includes('undefined'))
    {
        let members = await GetMembersByMovie(req.params.id)
        return resp.json(members)
    }
    
    console.log('failed to get members by movie id');
})


export default appRoute;
