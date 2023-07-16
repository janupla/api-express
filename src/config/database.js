import mongoose from 'mongoose'
import environment from './environment.js'

mongoose.set('strictQuery', false)

const mongoConnectionString = environment.DB_CONNECTION_STRING

export const startConnection = async () => { //inicia la conexion con mongoDB
    mongoose.connect(mongoConnectionString).then(() => console.log("Conexión a la base MONGO fue exitosa")).catch(error => console.error(error))
}
//inicia un método connect de moongoose 
//desde el Then sintaxis de promesa
const db = mongoose.connection
export default db