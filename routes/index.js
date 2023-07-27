const express = require("express");
const {saveQuestions,getAllQuestions,spectokenquestion,saveUser, getAllUsers} = require("../controller") //importing models

const router = express.Router();

router.post("/tokenQuestions",saveQuestions )
router.get("/getAllQuestion",getAllQuestions)
router.get("/spectokenquestion/", spectokenquestion)
//user
router.post("/saveuser", saveUser)
router.get('/getallusers', getAllUsers)

module.exports=router;