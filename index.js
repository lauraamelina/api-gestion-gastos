import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import UserRoute from './routes/usuarios.api.route.js';
import GruposGastosRoute from './routes/gruposGastos.api.route.js';
import SubCategoriasRoute from './routes/subcategorias.api.route.js';
import CategoriasRoute from './routes/categorias.api.route.js';
import CategoriasPersonalizadasRoute from './routes/categoriasPersonalizadas.api.route.js';
import SubCategoriasPersonalizadasRoute from './routes/subcategoriasPersonalizadas.api.route.js';
import GastosRoute from './routes/gastos.api.route.js'
import AuthRoute from './routes/auth.api.route.js'

const app = express();
app.use(bodyParser.json())
app.set('port', 8080)
app.use(cors())

app.use('/auth/', AuthRoute)
app.use('/usuarios/', UserRoute)
app.use('/gruposgastos/', GruposGastosRoute)
app.use('/categorias/', CategoriasRoute)
app.use('/subcategorias/', SubCategoriasRoute)
app.use('/categorias-personalizadas/', CategoriasPersonalizadasRoute)
app.use('/subcategorias-personalizadas/', SubCategoriasPersonalizadasRoute);
app.use('/gastos/', GastosRoute);

app.get('/', (req, res) => {
    res.send({
        message: 'Bienvenido a la API de Gestión de Gastos'
    })
})

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo. Puerto ', app.get('port'))
})