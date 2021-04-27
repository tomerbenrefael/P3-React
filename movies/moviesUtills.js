// get movie schema
import movie from './movieModel.js'

// GET all Movies data
export function GetAllMovies()
    {
        return new Promise((resolve, reject) =>
        {
            movie.find({}, function(err, data)
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


// GET a movie data
export function GetAMovie(id)
    {
        return new Promise((resolve, reject) =>
        {
            movie.findById(id, function(err,data)
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


export function AddMovie(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            let toAdd = new movie({
                name : data.name,
                premiered : data.premiered,
                genres : data.genres,
                image : data.image
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

export function UpdateMovie(id, updateData)
{
    return new Promise((resolve,reject) =>
    {
        movie.findByIdAndUpdate(id, {
            name: updateData.name,
            premiered : updateData.premiered,
            genres : updateData.genres,
            image : updateData.image
        },function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Updated')
            }
        })
    })
}

// Delete
export function Delete(id)
{
    return new Promise((resolve, reject) =>
    {
        movie.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve('Deleted!')
            }
        })
    })
}
