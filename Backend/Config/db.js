const mongoose = require('mongoose');

const connectDb = async ()=>{

        try  {
            await mongoose.connect(process.env.MONGO_URI);
            console.log('Connected to MongoDB')
        }
        catch(err) {
            console.log('Error connecting to MongoDB', err)
            process.exit(1);
        };
}

module.exports= connectDb;