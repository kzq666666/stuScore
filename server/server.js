const express = require('./node_modules/express')
const db = require('./db')
const bodyParser = require('./node_modules/body-parser')
const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By','node/express')
    res.header('content-Type','application/json;charset=utf-8')
    next()
})
app.get('/score',(req,res)=>{
    var scoreSearch = 'select * from student'
    db.DBConnection.query(scoreSearch,(err,result,field)=>{
        if(err){
            res.send({
                code:1,
                message:'查询失败'
            })
        }
        res.send({
            code:0,
            message:'查询成功',
            data:result
        })
    })
})
app.post('/score',(req,res)=>{
    console.log(req.body)
    try{
        var scorePar = [req.body.name,req.body.chinese,req.body.english,req.body.math];
        var scoreInsert = 'insert student(name,chinese,english,math) values(?,?,?,?)';
        db.DBConnection.query(scoreInsert,scorePar,(err)=>{
            if(err){
                console.log(err)
                res.send({
                    'code':1,
                    'message':'添加失败'
                })
                return
            }
            res.send({
                'code':0,
                'message':'添加成功'
            })
        })

    }
    catch(err){
        res.send({
            'code':1,
            'message':'添加失败'
        })
    }
})
app.listen(3000,()=>{
    console.log('Listening 3000')
})
