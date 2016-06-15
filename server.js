// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var cors 	   = require('cors');


app.use(express.static('app'));
app.use(express.static('uploads'));

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/uploads',  express.static(__dirname + '/uploads'));

app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


mongoose.connect('localhost:27017/isabelchavez'); // connect to our database
var Categoria     	  = require('./app/admin/models/categoria');
var CategoriaModa     = require('./app/admin/models/categoriaModa');
var CategoriaBlog     = require('./app/admin/models/categoriaBlog');

// blog
var Imagen     = require('./app/admin/models/imagen');
var Blog      = require('./app/admin/models/blog');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// app.use('/', function(req, res, next) {

//   console.log('Crox Something is happening.');

//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
//   next();
//  });



// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

var categoriaRouter = require('./app/admin/routes/categoria');
var categoriaModaRouter = require('./app/admin/routes/categoriaModa');
var categoriaBlogRouter = require('./app/admin/routes/categoriaBlog');

var BlogRouter = require('./app/admin/routes/blog');

app.use('/api/categoria', categoriaRouter);
app.use('/api/categoriaModa', categoriaModaRouter);
app.use('/api/categoriaBlog', categoriaBlogRouter);

app.use('/api/blog', BlogRouter);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


