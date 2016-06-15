// routes/calendarRouter.js
var express    = require('express');        // call express
var app        = express();
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');
CategoriaModa = mongoose.model('CategoriaModa');


var parseUrlencoded = bodyParser.urlencoded({ extended: false });

router.route('/')
.get(function (request, response) { 

	CategoriaModa.find(function(err, categorias) {
		if (err)
			response.send(err);
		response.json(categorias);
	});

})
.post(parseUrlencoded, function(request, response) { 

  		var cat = new CategoriaModa();      // create a new instance of the cat model
        cat.nombre = request.body.nombre;  // set the cats name (comes from the request)
        cat.orden = request.body.orden;  // set the cats name (comes from the request)

        console.log(request.body);
        // save the cat and check for errors
        cat.save(function(err) {
        	if (err)
        		response.send(err);
        	response.json({ message: 'Categoria creada' });
        });
    })
router.route('/:id_cat')
// .all(function (request, response) {

// })
.put(parseUrlencoded , function (req, res) {


console.log("actualizar");

 CategoriaModa.findById(req.params.id_cat, function(err, categoria ) {

            if (err)
                res.send(err);
            console.log("categoria encontrada"); 
            console.log( categoria); 

			console.log("parametros"); 
            console.log( req.body); 


            categoria.nombre = req.body.nombre;  // update the bears info
            categoria.orden = req.body.orden;  // update the bears info

            // save the bear
            categoria.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Categoria updated!' });
            });

	})
})
.get(function (req, res) {
 CategoriaModa.findById(req.params.id_cat, function(err, categoria ) {

            if (err)
                res.send(err);
            
            res.json(categoria);


    })
})
.delete(function (req, res) {

	 CategoriaModa.remove({
            _id: req.params.id_cat
        }, function(err, categoria) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
})


module.exports = router;