var express =  require('express');
var mongoose = require('mongoose');
var bodyPaser = require('body-parser');
var cors = require('cors');
var config = require('./config');

var app = express();


mongoose.connect(config.database,  (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Databse connected Successfully');
    }
});

const PORT = 3000;

app.use(cors());

app.use(bodyPaser.json());

var productRoute = require('./routes/product');
app.use('/product', productRoute);

var userRoute = require('./routes/user');
app.use('/user', userRoute);

var authRoute = require('./routes/auth');
app.use('/auth', authRoute);

app.get('/',(req,res)=>{
    res.send('Foobar');
})

app.listen(PORT,()=>{
    console.log('Server has been started at port: '+PORT);
})