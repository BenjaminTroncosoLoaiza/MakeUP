import express from express
import path from ('path');
const exphbs = require('express-handlebars');


const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main', // Layout por defecto
  layoutsDir: path.join(__dirname, 'views/layouts'), // Directorio de layouts
  partialsDir: path.join(__dirname, 'views/partials') // Directorio de partials
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal

app.get('/', (req, res) => {
  res.render('inicio', { titulo: 'Make Up 7x8', mensaje: '¡Bienvenido(a)! ¿Has visto las novedades que traemos a tus opciones? ¡Aqui estan!' });
  
});
app.get('/productos', (req, res) => {
  res.render('home', { titulo: 'Make Up 7x8', mensaje: '¡Bienvenido(a)! Aqui puedes comprar todo tipo de maquillaje' });
  
});

app.get('/sobre', (req, res) => {
  res.render('sobre', { titulo: 'Make Up 7x8'});
  
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
