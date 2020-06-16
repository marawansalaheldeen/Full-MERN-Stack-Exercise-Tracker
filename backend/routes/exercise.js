const express = require('express');
const Exercise = require('../models/exercise.model');
require('../models/mongocon');
const router = express.Router();

router.route('/').get(async(req,res)=>{
    try {
        const exercises = Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.route('/add').post(async(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });
    
    try {
        await newExercise.save();
        res.status(201).json("exercise added successfully");
    } catch (error) {
        res.status(400).json(error);
    }
    
});

module.exports = router;