import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/subscriptionsDB',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
