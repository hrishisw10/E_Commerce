const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const app = express();
const port = 4000;
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use('/',userRouter);

app.all('/',(req,res)=>{
    res.send("Hello from the magical world of E-Commerce!!!");    
});

mongoose.Promise=global.Promise;
mongoose.connect(db,{ useNewUrlParser: true,useCreateIndex:true,useUnifiedTopology:true },(err)=>{
    if (err) console.log(err);
    console.log("Connected to Database"); 
});



app.listen(port, () => {
    console.log('Backend listening on port ' +port.toString());
});

