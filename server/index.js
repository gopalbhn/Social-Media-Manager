const express = require('express');
const port = process.env.Port || 3000
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { ConnectDB } = require('./db/mongoConnection');
const userRouter = require('./rotutes/userRouter');
const postRouter = require('./rotutes/post')
const passport = require('passport');
const { googleProvider, twitterProvider } = require('./auth/auth');
require('dotenv').config()
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(cookieParser())
app.use(express.json());



app.use(session({
    secret:'test',
    cookie:{secure:true}
}))


app.use(passport.initialize())
app.use(passport.session())




app.use('/routes',userRouter)
app.use('/routes',postRouter)
ConnectDB();
googleProvider();
twitterProvider();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})




