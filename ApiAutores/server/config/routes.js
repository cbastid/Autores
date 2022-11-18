const authors = require("../controllers/authors");


module.exports = function(app){

  // 1. Devuelve todas las Authors
app.get("/getAll", (req, res) => {   
    authors.getAll(req, res);
  });
  
  // 2. Devuelve una Author por Id
  app.get("/getById/:id", (req, res) => {
    authors.getById(req, res);
  });
  
  // 3. Agrega una Author
  app.post("/new", (req, res) => {
    authors.new(req, res);

  });
  
  // 4. Edita los datos de una Author
  app.put("/putUpdate/:id", (req, res) => {   
    console.log("Route editar");
    authors.edit(req, res);

  });
  
  // 5. Elimina un Author
  app.delete("/deleteAuthor/:id", (req, res) => {
      authors.delete(req, res)
  });

}