const multer=require("multer")
const path=require("path")

const storage=multer.diskStorage({

destination:"../frontend/public/uploads",
filename:function(req,file,cb){
    cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
}

})

const upload=multer({


    storage:storage,
   fileFilter:function(req,file,cb){
       const fileTypes=/jpeg|jpg|png/i
       const mimeType=fileTypes.test(file.mimetype)
       if(mimeType){
           cb(null,true)
       }
       else{
           cb(null,false)
       }
   }
})

module.exports=upload