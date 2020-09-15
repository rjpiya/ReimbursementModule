
const multer  = require('multer')
//const router = require('express').Router();


var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      
        callback(null, __dirname+'\\uploads\\');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
    /*filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }*/
 });
 
 var upload = multer({
    storage: Storage
 }).fields([{
    name: 'file1'

 }])



 
 exports.uploadImage=(req,res)=>{ 
  //router.post('/uploadImage', function (req, res) {
  
    upload(req, res, function (err) {
      console.log(req,"test");
        var logo=req.files.file1[0].filename
       // console.log(req.files.file1[0].filename);
        if (err) {
            console.log('Error',err);
          // A Multer error occurred when uploading.
        } else{
          console.log("logo",logo)
            res.end(logo)
          // An unknown error occurred when uploading.
        }
     
        // Everything went fine.
      })
 // })
 
//})
    }

  
 

  

    
//})



