const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    email: String,
    /* Exemplos de campos:
    name: String,    
    age: Number,
    active: Boolean,
    password: String,
    */
});

module.exports = mongoose.model('User',UserSchema);