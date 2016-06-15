var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategoriaSchema   = new Schema({
    nombre: { type: String, required: true},
    orden: { type: Number, required: true}
});

module.exports = mongoose.model('Categoria', CategoriaSchema);