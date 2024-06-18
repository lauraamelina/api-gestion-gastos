import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
app.use(bodyParser.json())
app.set('port', 8080)
app.use(cors())

app.get('/', (req, res) => {
    res.send({
        message: 'Bienvenido a la API de Gestión de Gastos'
    })
})

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo. Puerto ', app.get('port'))
})