const Author = require("../models/author");

module.exports = {
  getAll: function (req, res) {
    Author.find()
      .then((author) => res.json(author))
      .catch((err) => res.json(err));
  },

  
  getById: function (req, res) {
    Author.findOne({ _id: req.params.id })
      .then((author) => res.json(author))
      .catch((err) => res.json(err));
  },

  new: function (req, res) {
    const author = new Author();
    console.log("Create ....");
    console.log(req.body);
    author.name = req.body.name;    
    author.save()
      .then((newAuthor) => res.json(newAuthor))
      .catch((err) => console.log(err));
  },


  edit: async function (req, res) {    
    console.log("controller edit");
   
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    console.log(id);
 
    const data =  Author.updateOne({ _id: id } , body )
      .then((author) => res.json( { message : "success",  author }))
      .catch((err) => res.json( { message : "fault",  error  : err}));
  },

  delete: function (req, res) {
    let id = req.params.id;
    Author.deleteOne({ _id: id })
      .then((deletedAuthor) => res.json(deletedAuthor))
      .catch((err) => res.json(err));
  },

};
