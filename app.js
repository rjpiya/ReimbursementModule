const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();
const reimbursementRoutes=require('./routes/reimbursementRoute')
const importerRoutes=require('./routes/importerRoute')
const uploadRoute=require('./routes/uploadRoute')




app.use(morgan('tiny'));//combined
app.use(cors());
app.use(bodyparser.json({
    limit:'50mb'
}))
app.use(bodyparser.urlencoded({
    extended:true
}))



app.use('/importert',importerRoutes)
app.use('/reimbursement', reimbursementRoutes)
app.use('/uploader', uploadRoute)










var port=process.env.PORT || 9000
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`)
});


module.exports=app;