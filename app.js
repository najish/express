require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;


/// required use from here 

const userRouter = require('./routes/userRouter');



// configure middleware here
app.use(express.json());
app.use('/user',userRouter);



// database configuration here
const database = require('./config/database');



//routes 




app.get('/',(req,res) => {
    res.send('running');
});

app.listen(PORT,() => {
    console.log(`running at port : ${PORT}`);
});