//resevas

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        //user que cadastrou a empresa
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Spot'
    }

});

module.exports= mongoose.model('Booking', BookingSchema);