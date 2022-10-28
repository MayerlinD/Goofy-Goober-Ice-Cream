const mongoose = require('mongoose');


// Make a Schema
const ggicecreamSchema = new mongoose.Schema({
    flavor:  { type: String, required: true },
    description:  { type: String, required: true },
    image: {type: String}
});


//Make a Model From The Schema
const GGIceCream = mongoose.model('GGIcecream', ggicecreamSchema);



//Export The Model For Use In The App
module.exports = GGIceCream;