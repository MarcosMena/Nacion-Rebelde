const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();

app.set('viewengine','ejs');   // Seteo el motor de plantillas ejs

app.use(express.static(path.resolve(__dirname, './publica')));
app.use(express.static(path.resolve(__dirname, './vistas')));

//app.use(session( {secret: "Este es mi secreto"} ));    // para definir que vas a utilizar información en sesión

app.use(express.urlencoded({ extended: false }));// Para especificar que vamos a transferir información por el body en peticiones 
app.use(express.json()); // Para especificar que vamos a transferir información por el body en peticiones 

app.use(methodOverride('_method')); // Para poder utilizar PUT o DELETE sobreescribiendo el método POST

const port = 3001;
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: http://localhost:${port}`);}); // para levantar el servidor en un puerto especifico 

