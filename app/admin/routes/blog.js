// routes/calendarRouter.js
var express    = require('express');        // call express
var app        = express();
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
var multer  = require('multer'); 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
},
filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
}
})


var upload = multer({ storage: storage });

Blog = mongoose.model('Blog');


var parseUrlencoded = bodyParser.urlencoded({ extended: false });


router.route('/')
.get(function (request, response) {
	Blog.find({}).populate('categoria').exec(function(err, categorias) {
		if (err)
			response.send(err);
		response.json(categorias);
	});
})
.post(parseUrlencoded, upload.array('imagenes', 12) , function(request, response) { 

  		var obj = new Blog();      // create a new instance of the cat model
        obj.titulo = request.body.titulo;  // set the cats name (comes from the request)
        obj.resumen = request.body.resumen;  // set the cats name (comes from the request)
        obj.contenido = request.body.contenido;  // set the cats name (comes from the request)
        obj.categoria = request.body.categoria;

        console.log(request.body);
        // save the cat and check for errors
        obj.save(function(err) {
        	if (err)
        		response.send(err);
        	response.json({ message: 'Blog creada' });
        });
    })


router.route('/:id_cat').put(parseUrlencoded , function (req, res) {


    console.log("actualizar");

    Blog.findById(req.params.id_cat, function(err, blog ) {

        if (err)
            res.send(err);

	        blog.titulo = req.body.titulo;  // set the cats name (comes from the request)
	        blog.resumen = req.body.resumen;  // set the cats name (comes from the request)
	        blog.contenido = req.body.contenido;  // set the cats name (comes from the request)
            blog.categoria = mongoose.Types.ObjectId(req.body.categoria);
            // save the bear
            blog.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Blog updated!' });
            });
        })
})

.get(function (req, res) {
   Blog.findById(req.params.id_cat, function(err, categoria ) {

    if (err)
        res.send(err);

    res.json(categoria);


})
})
.delete(function (req, res) {

  Blog.remove({
    _id: req.params.id_cat
}, function(err, categoria) {
    if (err)
        res.send(err);

    res.json({ message: 'Successfully deleted' });
});
});

router.post('/file/upload' ,  upload.array('file' , 4) , function (req, res) { 



    console.log( req.file ); 
    console.log( req.files ); 



    Blog.findById(req.body._id, function(err, blog ) {

        if (err)
            res.send(err);

            blog.titulo = req.body.titulo;  // set the cats name (comes from the request)
            blog.resumen = req.body.resumen;  // set the cats name (comes from the request)
            blog.contenido = req.body.contenido;  // set the cats name (comes from the request)
            blog.categoria = mongoose.Types.ObjectId(req.body.categoria);

            // blog.imagenes = [];


            for (var i = 0; i < req.files.length; i++) {
                            console.log(req.files[i]['filename']);

                blog.imagenes.push(  req.files[i]['filename']  );
            }



            blog.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Blog updated!' });
            });

        })




});

module.exports = router;