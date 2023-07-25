const express = require("express");
const {saveQuestions,getAllQuestions,spectokenquestion} = require("../controller") //importing models

const router = express.Router();

router.post("/tokenQuestions",saveQuestions )
router.get("/getAllQuestion",getAllQuestions)
router.get("/spectokenquestion/", spectokenquestion)

module.exports=router;