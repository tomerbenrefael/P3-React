// get subs schema
import subs from './subscriptionsModel.js'

// GET all Members data
export function GetAllSubscriptions()
    {
        return new Promise((resolve, reject) =>
        {
            subs.find({}, function(err, data)
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

export function AddSubscriptions(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            let toAdd = new subs({
                member_id : data.member_id,
                movie_id : data.movie_id,
                date : data.date
            })
            toAdd.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Created!')
                }
            })
        })

    }

    export function GetMoviesByMember(member_id)
    {
        return new Promise((resolve, reject) =>
        {
            subs.find({member_id: member_id}, function(err, data)
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

    export function GetMembersByMovie(movie_id)
    {
        return new Promise((resolve, reject) =>
        {
            subs.find({movie_id: movie_id}, function(err, data)
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
