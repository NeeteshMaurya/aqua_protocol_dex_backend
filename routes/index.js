const express = require("express");
const {saveQuestions,getAllQuestions} = require("../controller") //importing models

const router = express.Router();

router.post("/tokenQuestions",saveQuestions )
router.get("/getQuestion",getAllQuestions)

module.exports=router;