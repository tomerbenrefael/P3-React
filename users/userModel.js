
import mongoose from 'mongoose';
let appSchema = mongoose.Schema;
let userSchema = new appSchema(
    {
        name : String,
        username : String,
        password : String,
    }
)

export default mongoose.model('users', userSchema)
