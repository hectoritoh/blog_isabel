var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategoriaModaSchema   = new Schema({
    nombre: { type: String, required: true},
    orden: { type: Number, required: true}
});

module.exports = mongoose.model('CategoriaModa', CategoriaModaSchema);