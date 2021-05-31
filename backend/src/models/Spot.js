const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail : String, //imagem
    company: String, //empresa
    price: Number, //valor
    techs: [String], //tecnologias
    user: {
        //user que cadastrou a empresa
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports= mongoose.model('Spot', SpotSchema);