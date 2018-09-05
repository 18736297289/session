var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/desc',(req,res) => {
  res.render('login')
})
//post 请求数据。
router.post('/login' , (req,res)=>{
  let formdata = req.body;
  req.session.user=  formdata;
  res.json({
    code:200,
    msg:"登录成功"
  })
})
//get 请求数据。
router.get('/getUserInfo',(req,res) =>{
  if(req.session.user){
    res.json({
      code:200,
      userinfo:req.session.user
    })
  }else{
    res.json({
      code:403,
      msg:"登录失败"
    })

  }
})


module.exports = router;
