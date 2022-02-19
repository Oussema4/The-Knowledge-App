const { body, validationResult } = require('express-validator')

const registerRules=[
    body("email","Email is not valid").isEmail(),
body("name"," Name is required").notEmpty(),

body("password","The password must contain at least 8 characters ").isLength({min:8})    
]


const loginRules=[
    
    body("email","Email is not valid").isEmail(),
    body("password","The password must contain at least 8 characters ").isLength({min:8})    
    ]


const validator=(req,res,next)=>{
const errorsresults=validationResult(req)
if (!errorsresults.isEmpty()){

    return res.status(400).send({errors:errorsresults.array()})
}
next()
}
module.exports={registerRules,validator,loginRules}