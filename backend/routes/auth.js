const express=require("express")
const { registerRules,validator,loginRules } = require("../middleware/validator")
const router=express.Router()
const isAuth = require("../middleware/isAuth");
const { signup, signin, getcurrent, updateUser, getAllUsers, deleteUser } = require("../controllers/authController");




//signup

router.post("/signup",[registerRules,validator],signup)


//signin

router.post("/signin",[loginRules,validator],signin)


//getcurrent
router.get("/current",isAuth,getcurrent)

//updateUser

router.put("/:userId",updateUser)


router.get("/users",getAllUsers)

router.delete("/:id",deleteUser)






module.exports=router