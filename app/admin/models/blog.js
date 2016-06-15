var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlogSchema   = new Schema({
    titulo: { type: String, required: true},
    resumen: { type: String, required: true},
    contenido: { type: String, required: true},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'CategoriaBlog'},
    imagenes: []
});

module.exports = mongoose.model('Blog', BlogSchema);