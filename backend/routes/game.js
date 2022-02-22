const express=require("express")
const { addQuestion, deleteQuestion, getAllQuestions, updateQuestion, getSport, getQuiz, getNumber, getCount, getOneQuiz, getOneNumber } = require("../controllers/gameController")
const router=express.Router()





router.post("/addQuestion",addQuestion)


router.delete("/:gameId",deleteQuestion)



router.get("/getAllQuestions",getAllQuestions)



router.put("/:gameId",updateQuestion)



router.get("/getSport",getSport)


router.get("/getQuiz",getQuiz)

router.get("/getNumber",getNumber)

router.get("/getOneQuiz",getOneQuiz)

router.get("/getOneNumber",getOneNumber)






module.exports=router