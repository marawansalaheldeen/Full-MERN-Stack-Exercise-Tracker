const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/Tracker",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true   
})

