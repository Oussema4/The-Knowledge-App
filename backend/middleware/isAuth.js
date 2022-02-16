const jwt = require('jsonwebtoken');


const isAuth=(req,res,next)=>{


const token=req.headers["authorization"]
if (!token){

    return res.status(401).send({errors:[{msg:"you are not authorized"}]})
}
try {
const decoded = jwt.verify(token,process.env.mykey)
console.log(decoded)
req.user=decoded
next()

    
} catch (error) {
    console.log(error)
    res.status(500).send("server error")
}

}
module.exports=isAuth