const express = require('express');
const User = require('../models/user.model');
require('../models/mongocon');
const router = new express.Router();

router.route('/').get(async(req,res)=>{

    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
});

router.route('/test').get((req,res)=>{
    res.send('hello world');
})

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});
    try {
        newUser.save();
        res.status(201).json('new user added')     
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;

