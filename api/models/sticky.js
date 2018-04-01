'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let StickySchema = new Schema({
    /**
     * Title of the sticky.
     */
    name:{
        type:String
    },
    
    img: {
        type:String
    },
    price: {
       type: Number
    },

    discription:{
       type: String
    },

    evaluate: {
        type: Number
    },
    catalog: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Stickies', StickySchema);