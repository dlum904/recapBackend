const express = require('express');
const router = express.Router();

const Question = require('../../models/question')

router.get('/', (req, res) => {
    Question.find() // returns us all questions in Question
        .then(questions => res.json(question))  // format our questions
            .catch(err=> res.status(404).json(err)) // if there are errors send this response
})