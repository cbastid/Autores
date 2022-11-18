const mongoose = require("mongoose");

// Creacion del esquema
const AuthorSchema = new mongoose.Schema({
  name: { type: String, require: [true, 'name required']  , maxlength:100 },  
  created_at: { type: Date, require: [true, 'created_at required'] } ,
  updated_at: { type: Date, require: [true, 'updated_at required'] } 
}, { timestamps: true })


// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
  