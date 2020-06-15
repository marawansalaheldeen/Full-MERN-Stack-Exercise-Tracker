const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Tracker',{
    useCreateIndex:true,
    useNewUrlParser:true
});

