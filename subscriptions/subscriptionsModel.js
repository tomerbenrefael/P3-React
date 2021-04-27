
import mongoose from 'mongoose';
let appSchema = mongoose.Schema;
let subscriptionsSchema = new appSchema(
    {
        member_id : String,
        movie_id : String,
        date : Date
    }
)


export default mongoose.model('subscriptions', subscriptionsSchema)
