const TokensQuestion = require("../models/tokenRelatedQestion")

async function saveQuestions(req, res){
    const data = req.body
    if (
        !data ||
        !data.pairName ||
        !data.questionNumber
    ){
        return res.status(400).json({msg: "All fiels required"})
    }
    const result = await TokensQuestion.create({
        pairName: data.pairName,
        questionNumber: data.questionNumber
    })
    return res.status(201).json({msg: "success"})
}
async function getAllQuestions(req, res){
    const allQuestion = await TokensQuestion.find({})
    return res.json(allQuestion)
}

module.exports = { saveQuestions,getAllQuestions}