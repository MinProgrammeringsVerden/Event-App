const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
        event:{type:String , require:true} , 
        person:{type:String , require:true} ,
        description:{type :String , require:true} , 
        date:{type:Date , require:true}  
     } , 
     {   timestamps :true , }


);
module.exports = mongoose.model('Event' , eventSchema);