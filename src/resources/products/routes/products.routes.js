import { Router } from 'express'
import { isAdmin, verifyToken } from '../../auth/middlewares/auth.middleware.js'
import { createProduct, getProductById, getProducts } from '../controllers/products.controller.js'

const productsRouter = Router()
const baseURI = '/products'

productsRouter .post( baseURI, createProduct )
productsRouter .get( baseURI, verifyToken, getProducts )
productsRouter .get( `${ baseURI }/:id`, verifyToken, getProductById )

export default productsRouter