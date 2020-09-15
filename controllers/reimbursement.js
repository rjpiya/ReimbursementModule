const db = require('../models/dbcon');
const event = require('../middleware/logger.js')
const syncLoop = require('sync-loop');



 //To Add new Reimbursement

 //Here we are firing Upload API separately on UI for uploading images and getting attached document path that files will be uploaded in this directory Upload folder
    
 exports.addReimbursement=(req,res)=>{
  var inputParams=req.body;
  var obj;
 
  syncLoop(inputParams.length,function(loop){
      var i=loop.iteration();
      var myQuery;
if(inputParams[i].input_option_mode=="Hotel")
{
  myQuery="insert into `reimbursement` (input_option_mode,from_date,to_date,hotel_name,invoice_number,amount,attached_document_path) VALUES('"+inputParams[i].input_option_mode+"','"+inputParams[i].from_date+"','"+inputParams[i].to_date+"','"+inputParams[i].hotel_name+"','"+inputParams[i].invoice_number+"','"+inputParams[i].amount+"','"+inputParams[i].attached_document_path+"')"
}
if(inputParams[i].input_option_mode=="Conveyance")
{
  myQuery="insert into `reimbursement` (input_option_mode,from_date,to_date,from_source,to_destination,purpose,mode,kilometer,invoice_number,amount,attached_document_path) VALUES('"+inputParams[i].input_option_mode+"','"+inputParams[i].from_date+"','"+inputParams[i].to_date+"','"+inputParams[i].from_source+"','"+inputParams[i].to_destination+"','"+inputParams[i].purpose+"','"+inputParams[i].mode+"','"+inputParams[i].kilometer+"','"+inputParams[i].invoice_number+"','"+inputParams[i].amount+"','"+inputParams[i].attached_document_path+"')"
}
else{
 
}
 
  db.query(myQuery,(err,result,fields)=>{
if(err){
  event.log('Error while adding Reimbursement' + JSON.stringify(err));
  res.jsonp(err)
  loop.next();
}else{
  if(result.affectedRows < 1){
      obj={
          "success":false,
          "message":"Something Went Wrong"
      }
      res.end(JSON.stringify(obj));
      loop.next();
  }else{
      obj={
          "success":true,
          "message":"Reimbursement Added Successfully"
      }
      res.end(JSON.stringify(obj));
      loop.next();
  }

}
  })
},function(done){
  var obj = {
      "success": true,
      "message": "Reimbursement Added Successfully"

  }
  res.end(JSON.stringify(obj));
}
)
  }



  


  
    //API to fetch 1 reimbursement Entry

    exports.getReimbursemnet=(req,res)=>{
      var obj;
      var inputParams=req.body;
      var myQuery;
     if(inputParams.input_option_mode)
     {
     if( inputParams.input_option_mode=="Hotel")
     {
       myQuery="select id as reimbursement_id,input_option_mode,from_date,to_date,invoice_number, amount,hotel_name,attached_document_path from reimbursement where input_option_mode='"+inputParams.input_option_mode+"' and id ='"+inputParams.reibursement_id+"'";
     }
     if( inputParams.input_option_mode=="Conveyance")
     {
       myQuery="SELECT id as reimbursement_id,input_option_mode,from_date,to_date,from_source,to_destination,purpose,mode,kilometer,amount,attached_document_path,input_option_mode FROM `reimbursement` where id='"+inputParams.reibursement_id+"'";
     }
     }
     else{
       myQuery="SELECT * FROM `reimbursement` where id='"+inputParams.reibursement_id+"' ";
     }
       db.query(myQuery,function(err,result,fields){
      if(err){
          event.log('Error while getting Reimbursement' + JSON.stringify(err));
      res.jsonp(err);
      }else{
    if(result[0]!=null){
      obj={
          "result":result,
          "success":true,
          "message":"Reimbursement Get Successfully"
      }
      res.end(JSON.stringify(obj));
    }else{
      obj={
          "success":false,
          "message":"No Data Found"
      }
      res.end(JSON.stringify(obj));
    }
       
      }
      })}



   //API to fetch all reimbursement Entry between two dates

   exports.getAllReimbursemnetDatewise=(req,res)=>{
    var obj;
    var inputParams=req.body;
    
   
    var myQuery="SELECT * FROM `reimbursement` where from_date>= '"+inputParams.from_date+"' and to_date<='"+inputParams.to_date+"' ORDER BY from_date DESC";
   
     db.query(myQuery,function(err,result,fields){
    if(err){
        event.log('Error while getting Reimbursement List' + JSON.stringify(err));
    res.jsonp(err);
    }else{
  if(result[0]!=null){
    obj={
        "result":result,
        "success":true,
        "message":"Reimbursement List Get Successfully"
    }
    res.end(JSON.stringify(obj));
  }else{
    obj={
        "success":false,
        "message":"No Data Found"
    }
    res.end(JSON.stringify(obj));
  }
     
    }
    })}