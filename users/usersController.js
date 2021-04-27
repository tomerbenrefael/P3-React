// import express for rounting functionality
import { Router } from 'express'
// link to usersUtils
import { GetAllUsers, isAUser } from './usersUtils.js'
import {auth} from '../authentication.js'
import jwt from 'jsonwebtoken'
import fs from 'fs'

let secretKey = fs.readFileSync('/home/michael/Projects/FullStack/Projects/Project MERN/MERN/Server/users/secret_key.key')

// link to Router function
const appRoute = Router()


// GET all
appRoute.route('/').get(async function(req,resp)
{
    let users = await GetAllUsers()
    return resp.json(users)
})

// verify username and password
appRoute.route('/login').post(async function(req,resp)
{   
    let username = req.body.username
    let password = req.body.password
    let isUser = await isAUser(username,password)
    if(isUser.length)
    {
        let token = jwt.sign({id: isUser[0]._id}, secretKey, {expiresIn: '1800s'})
        
        return resp.status(200).send({'token': token, 'name': isUser[0].name})
    }
    else
    {
        return resp.status(401).send({'data': 'username and/or password are not valid'})
    }
})

// verify token
appRoute.route('/auth').post(function(req, resp)
{
    let token = req.body.token
    let isAuth = auth(token)
    if(isAuth)
    {
        return resp.status(200).send({'auth': true})
    }
    else
    {
        return resp.status(401).send({'auth': false})
    }

})


export default appRoute;
