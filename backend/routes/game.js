const express=require("express")
const { addQuestion, deleteQuestion, getAllQuestions, updateQuestion, getSport, getQuiz, getNumber, getOneQuiz, getOneNumber, getOneQuestion } = require("../controllers/gameController")
const router=express.Router()
const isAuth=require("../middleware/isAuth")


router.get("/getQuiz",isAuth,getQuiz)

router.get("/getNumber",isAuth,getNumber)

router.get("/getAllQuestions",isAuth,getAllQuestions)

router.get("/getOneQuiz/:index",isAuth,getOneQuiz)

router.get("/getOneNumber/:index",isAuth,getOneNumber)

router.get("/:id",isAuth,getOneQuestion)

router.put("/:gameId",updateQuestion)

router.post("/addQuestion",addQuestion)

router.delete("/:gameId",deleteQuestion)




module.exports=router