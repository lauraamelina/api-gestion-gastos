import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const connectToDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
        console.log('Conexión a la base de datos')
        return connection;
    } catch (error) {
        console.error('Error al conectar la base de datos: ', error)
        throw error;
    }
}

export default connectToDatabase;