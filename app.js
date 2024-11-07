import express from 'express';
import path from 'path';
import handlebars from 'express-handlebars';
import productoRouter from './src/routes/productoRouter.js';
import __dirname from './src/utils.js';

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Configuración de middlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Handlebars como motor de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/',productoRouter)
// Redirección de la raíz (/) a /inicio

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
