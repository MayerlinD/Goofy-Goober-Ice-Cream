const mongoose = require('mongoose');


// Make a Schema
const gooberSchema = new mongoose.Schema({
    flavor:  { type: String, required: true },
    image: {type: String}
});


//Make a Model From The Schema
const Goober = mongoose.model('Goober', gooberSchema);



//Export The Model For Use In The App
module.exports = Goober;