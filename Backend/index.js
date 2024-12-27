const express =require('express')
const connectDb = require('./Config/db');
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()

const app = express();


const PORT = process.env.PORT || 4000;

// database connection
connectDb()


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});



