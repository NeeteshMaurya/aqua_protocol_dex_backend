const mongoose = require('mongoose');

const tokenQuestionSchema = new mongoose.Schema({
    pairName: String,
    Q1: String,
    Q1A: String,
    Q1B: String,
    Q1C: String,
    Q1D: String,
    Q1Answer: String,
    Q2: String,
    Q2A: String,
    Q2B: String,
    Q2C: String,
    Q2D: String,
    Q2Answer: String,
})

module.exports = mongoose.model("TokensQuestion",tokenQuestionSchema)