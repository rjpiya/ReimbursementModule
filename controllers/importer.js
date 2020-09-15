const db = require('../models/dbcon');
const event = require('../middleware/logger.js')
const readXlsxFile = require('read-excel-file/node');
const syncLoop = require('sync-loop');


//For now i am reffering the file from this directory location only insted of upoadng from anywhere


exports.readExcel=(req,res)=>{

var filepath=__dirname+'\\templateShedule.xlsx'



const schema = {
    'date': {
      prop: 'date',
      type: String,
      required: true
      
    },
    'employee id': {
      prop: 'employee_id',
      type: String,
      required: true
    },
    
    'name': {
      prop: 'name',
      required: true,
      type: String,
    },
    
    'working type': {
      prop: 'working_type',
      type: String,
      oneOf: [
        'working time',
        'lunch',
        'break',
        'training',
        'route',
        'day off',
        'leave'
      ]
    },

    'start': {
        prop: 'start',
        required: true,
        type: String,
      },

      'end': {
        prop: 'end',
        required: true,
        type: String,
      },
      
      'store id': {
        prop: 'store_id',
        required: true,
        type: String,
      },

      'store name': {
        prop: 'store_name',
        required: true,
        type: String,
      }
  }

  readXlsxFile(filepath, { schema }).then(({ rows, errors }) => {
 
  syncLoop(rows.length,function(loop){
    var i=loop.iteration();
  
    var date
    if(!rows[i].date)
    {
      rows.date[i]=null
    }
    if(!rows[i].employee_id)
    {
      rows[i].employee_id=null
    }
    if(!rows[i].name)
    {
      rows[i].name=null
    }
    if(!rows[i].working_type)
    {
      rows[i].working_type=null
    }
    if(!rows[i].start)
    {
      rows[i].start=null
    }
    if(!rows[i].end)
    {
      rows[i].end=null
    }
    if(!rows[i].store_id)
    {
      rows[i].store_id=null
    }
    if(!rows[i].store_name)
    {
      rows[i].store_name=null
    }
var myQuery="insert into `importer` (date,employee_id,name,working_type,start,end,store_id,store_name) VALUES('"+rows[i].date+"','"+rows[i].employee_id+"','"+rows[i].name+"','"+rows[i].working_type+"','"+rows[i].start+"','"+rows[i].end+"','"+rows[i].store_id+"','"+rows[i].store_name+"')";
db.query(myQuery,(err,result,fields)=>{
if(err){
event.log('Error while employee details' + JSON.stringify(err));
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
        "message":"Employee details Added Successfully"
    }
   res.end(JSON.stringify(obj));
    loop.next();
}

}
})
},function(done){
var obj = {
    "success": true,
    "message": "Employee details Added Successfully"

}
res.end(JSON.stringify(obj));
}
)





})
 
}



