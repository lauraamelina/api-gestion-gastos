import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import UserRoute from './routes/usuarios.api.route.js';

const app = express();
app.use(bodyParser.json())
app.set('port', 8080)
app.use(cors())

app.use('/usuarios/', UserRoute)

app.get('/', (req, res) => {
    res.send({
        message: 'Bienvenido a la API de Gestión de Gastos'
    })
})

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo. Puerto ', app.get('port'))
})