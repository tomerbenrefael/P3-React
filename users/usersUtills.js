// get user schema
import user from './userModel.js'

// GET all Users data
export function GetAllUsers()
    {
        return new Promise((resolve, reject) =>
        {
            user.find({}, function(err, data)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(data)
                }
            })
        })
    }


// GET a user data
export function isAUser(username, password)
    {
        return new Promise((resolve, reject) =>
        {
            
            user.find({username: username, password: password}, function(err,data)
            {
                if(err)
                {
                    reject(false)
                }
                else
                {
                    resolve(data)
                }
            })
        })
    }
