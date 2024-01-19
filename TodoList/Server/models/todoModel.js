const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    email:String,
    task:String,
    isComp:Boolean,
})

module.exports=mongoose.model('Todo' ,todoSchema);