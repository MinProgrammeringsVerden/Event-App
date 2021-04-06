const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema ({
    person :{
        type: String , 
        required: true , 
        unique: true , 
        trim: true , 
        minlength: 3
    }
} ,  {
    timestamps:true

});
module.exports = mongoose.model('Person' , personSchema);