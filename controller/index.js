const TokensQuestion = require("../models/tokenRelatedQestion")
const Users = require("../models/usersDetail")

//tokenQuestions
async function saveQuestions(req, res){
    const data = req.body
    if (
        !data ||
        !data.pairName ||
        !data.Q1 ||
        !data.Q1A ||
        !data.Q1B
    ){
        return res.status(400).json({msg: "All fields required"})
    }
    try{
        const result = await TokensQuestion.create({
            pairName: data.pairName,
            Q1: data.Q1,
            Q1A: data.Q1A,
            Q1B: data.Q1B,
            Q1C: data.Q1C,
            Q1D: data.Q1D,
            Q1Answer: data.Q1Answer,
            Q2: data.Q2,
            Q2A: data.Q2A,
            Q2B: data.Q2B,
            Q2C: data.Q2C,
            Q2D: data.Q2D,
            Q2Answer: data.Q2Answer,
            Q3: data.Q3,
            Q3A: data.Q3A,
            Q3B: data.Q3B,
            Q3C: data.Q3C,
            Q3D: data.Q3D,
            Q3Answer: data.Q3Answer,
            Q4: data.Q4,
            Q4A: data.Q4A,
            Q4B: data.Q4B,
            Q4C: data.Q4C,
            Q4D: data.Q4D,
            Q4Answer: data.Q4Answer,
            Q5: data.Q5,
            Q5A: data.Q5A,
            Q5B: data.Q5B,
            Q5C: data.Q5C,
            Q5D: data.Q5D,
            Q5Answer: data.Q5Answer,
        })
        return res.status(201).json({msg: "success"})
    } catch(error) {
        res.status(error.response.status)
        return res.send(error.message);
    }
    
}
async function getAllQuestions(req, res){
    const allQuestion = await TokensQuestion.find({})
    return res.json(allQuestion)
}
async function spectokenquestion(req, res){
    var data = req.headers
    // console.log(req.headers["pairname"]) //here field name should be in small letters always
    try{
        const questions = await TokensQuestion.findOne({pairName: req.headers["pairname"]})
        return res.json(questions)
    }
    catch(err){
        return res.status(400).json({msg: err})
    }
}

//userDetails who already answered the questions for given pair
async function saveUser(req, res){
    const data = req.body
    if(!data || !data.pairName || !data.account){
        return res.status(400).json({msg: "All Field required"})
    }
    try{
        const result = await Users.create({
            account: data.account,
            pairName: data.pairName,
        })
        return res.status(201).json({msg: "user details successfully saved"})
    }catch(error){
        return res.send(error.message);
    }  
}
async function getUser(req, res){
    var data = req.headers
    try{
        const user = await Users.findOne({pairName: req.headers["pairname"],account: req.headers["accounts"]})
        return res.json(user)
    }
    catch(err){
        return res.status(400).json({msg: err})
    }
}
async function getAllUsers(req, res){
    try{
        const usersDetail = await Users.find({})
        return res.send(usersDetail)
    }catch(err){
        return res.status(400).json({msg: err})
    }
}

module.exports = { saveQuestions,getAllQuestions,spectokenquestion,saveUser, getUser,getAllUsers}