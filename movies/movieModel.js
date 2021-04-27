/ create connection to mongodb
import mongoose from 'mongoose';

// schema
let appSchema = mongoose.Schema;

let movieSchema = new appSchema(
    {
        name : String,
        premiered : String,
        genres : [String],
        image : Object
    }
)


export default mongoose.model('movies', movieSchema)
