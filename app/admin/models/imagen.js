var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlogSchema   = new Schema({
    nombre: { type: String, required: true},
    url: { type: String, required: true},
    img: { data: Buffer, contentType: String }
});

module.exports = mongoose.model('Imagen', BlogSchema);