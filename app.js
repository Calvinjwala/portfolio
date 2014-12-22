var express = require("express"),
  app = express();
  ejs = require("ejs");
  lodash = require("lodash");
  pg = require("pg");
  morgan = require("morgan"); 
  bodyParser = require("body-parser");
  methodOverride = require("method-override");


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}) );
app.use(methodOverride('_method'));

app.get('/', function(req,res){
    res.render('home');
});

app.get('*', function(req,res){
  res.status(404);
  res.render('404');
});


app.listen(process.env.PORT || 3000, function(){
  console.log("get this party started on port 3000");
});