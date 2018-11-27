let mongoose = require('mongoose');

let consoles = mongoose.model('consoles', {
    productId: {type:Number}, 
    title: {type:String},
    creator: {type:String},
    description: {type:String},
    price: {type:Number},
    productType: {type:String},
    productCategory: {type:String},
    caption: {type:String},
    url: {type:String},
    availability: {type:String}
        // { imageId: {type:Number}, url: {type:String}, caption: {type:String}, primaryImage: {type: Boolean}  },
        // { imageId: {type:Number}, url: {type:String}, caption: {type:String}, primaryImage: {type: Boolean} }
});

module.exports= {consoles};