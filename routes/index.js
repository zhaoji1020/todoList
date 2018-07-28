var express = require('express');
var router = express.Router();
var todoList = require('../database/model/todoList')
/* GET home page. */
router.get('/', function(req, res, next) {
    todoList.find({}).exec((err,data)=>{
      console.log(data);
      res.render('index', { title: 'Express',arr: data});
    })
});
router.get('/add',(req,res)=>{
  todoList.create({title:"写bug",isDone:false}).then(data=>{
    res.send("完成")
  })
})


module.exports = router;
