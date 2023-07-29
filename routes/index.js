const express = require("express");
const {saveQuestions,getAllQuestions,spectokenquestion,saveUser, getUser,getAllUsers} = require("../controller") //importing models

const router = express.Router();

router.post("/tokenQuestions",saveQuestions )
router.get("/getAllQuestion",getAllQuestions)
router.get("/spectokenquestion/", spectokenquestion)
//user
router.post("/saveuser", saveUser)
router.get('/getuser', getUser)
router.get('/getalluser', getAllUsers)

module.exports=router;