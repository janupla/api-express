import { Router } from 'express'
import { createProduct, getProductById, getProducts } from '../controllers/products.controller.js'

const productsRouter = Router()
const baseURI = '/products'

productsRouter .post( baseURI, createProduct )
productsRouter .get( baseURI, getProducts )
productsRouter .get( `${ baseURI }/:id`, getProductById )

export default productsRouter