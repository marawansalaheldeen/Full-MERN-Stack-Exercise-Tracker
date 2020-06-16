const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercise')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/users',userRouter);
app.use('/exercises', exercisesRouter);


app.listen(port,()=>{
    console.log(`server is up on port ${port}`)
})