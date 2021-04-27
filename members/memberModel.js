
import mongoose from 'mongoose';
let appSchema = mongoose.Schema;
let userSchema = new appSchema(
    {
        name : String,
        email : String,
        city : String,
    }
)

export default mongoose.model('members', userSchema)
