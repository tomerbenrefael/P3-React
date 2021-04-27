import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/subscriptionsdb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
