// get member schema
import member from './memberModel.js'

// GET all Members data
export function GetAllMembers()
    {
        return new Promise((resolve, reject) =>
        {
            member.find({}, function(err, data)
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


// GET a member data
export function GetAMember(id)
    {
        return new Promise((resolve, reject) =>
        {
            member.findById(id, function(err,data)
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


export function AddMember(data)
    {
        console.log(data);
        return new Promise((resolve, reject) =>
        {
            let toAdd = new member({
                name : data.name,
                email : data.email,
                city : data.city
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

export function UpdateMember(id, updateData)
{
    return new Promise((resolve,reject) =>
    {
        member.findByIdAndUpdate(id, {
            name: updateData.name,
            email : updateData.email,
            city : updateData.city
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
        member.findByIdAndDelete(id, function(err)
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
