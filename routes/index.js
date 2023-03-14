var express = require('express');
var router = express.Router();
const cors = require('cors')
const app = express();

app.use(cors());


const middleware1 = (req,res,next)=>{
  console.log("i am the middleware one");
  console.log("got the login request");
  next();
}

const middleware2 = (req,res,next)=>{
  console.log("i am the middleware two");
  next();
}

/* GET base page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cors' , (req,res)=>{
  res.json({
    "element" :
    [{
      "name" : "akash kumar",
      "age" : "22"
    }] 
  })
})

router.get('/home', middleware1 , (req,res)=>{
  console.log("firtst middelware log is a success..");
  res.render('index' , {title : "Express"});
})

router.get('/contact', middleware2 ,(req,res)=>{
  console.log("second middelware log is a success..");
  res.json({
    "clubs" : 
    [{
      club1 : "Tottenham",
      club2 : 'Al Nasir'
    }]
  })
  res.end();
})

module.exports = router;
