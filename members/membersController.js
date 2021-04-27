// import express for rounting functionality
import { Router } from 'express'
// link to membersUtils
import { GetAllMembers, GetAMember, AddMember, UpdateMember, Delete } from './membersUtils.js'
// link to Router function
const appRoute = Router()


// GET all
appRoute.route('/').get(async function(req,resp)
{
    let members = await GetAllMembers()
    return resp.json(members)
})


// GET a member
appRoute.route('/:id').get(async function(req, resp)
{
    let id = req.params.id;
    let member = await GetAMember(id);
    return resp.json(member)
})


// POST (add a member)
appRoute.route('/').post(async function(req,resp)
{
    let newmember = req.body;
    let result = await AddMember(newmember)
    return resp.json(result)
})

// PUT (update a member)
appRoute.route('/:id').put(async function(req,resp)
{
    let id = req.params.id
    let newmember = req.body
    let result = await UpdateMember(id,newmember)
    return resp.json(result)
})

// Delete a member
appRoute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id
    let result = await Delete(id)
    return resp.json(result)
})

export default appRoute;
