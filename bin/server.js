require("dotenv").config();
const app = require("../src/api");

app.use((req, res, next) => {   //
  next();                       //MIDDLEWARE QUE NAO FAZ NADA
});                             //

const port = process.env.API_PORT || 5000;

app.listen(port);

console.log("App executando na porta " + port);
