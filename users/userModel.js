// create connection to mongodb
import mongoose from 'mongoose';

// create schema class
let appSchema = mongoose.Schema;

// schema
let userSchema = new appSchema(
    {
        name : String,
        username : String,
        password : String,
    }
)


export default mongoose.model('users', userSchema)
