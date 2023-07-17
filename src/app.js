import cors from 'cors'
import express from 'express'
import { startConnection } from './config/database.js'
import environment from './config/environment.js'
import authRoutes from './resources/auth/routes/auth.routes.js'
import postsRouter from './resources/posts/routes/posts.routes.js'
import usersRouter from './resources/users/routes/users.routes.js'
import productRouter from  './resources/products/routes/products.routes.js'

const app = express()

startConnection()

app.use(express.json())
app.use(cors()) //permite acceso de toda solicitud, evita el error cors 

app.get('/', function (req, res) {
    return res.status(200).json({ msg: "Bienvenido" })
})

app.use(usersRouter)
app.use(postsRouter)
app.use(productRouter)
app.use(authRoutes)

const { PORT } = environment
app.listen(PORT, () => {
    console.log(`Aplicación iniciada en puerto ${PORT}`)
})