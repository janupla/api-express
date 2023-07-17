import { awaitCatcher } from 'await-catcher'
import { ProductsModel } from '../models/products.model.js'
const products = []
export async function createProduct(req, res) {
    const body = req.body
    const [productCreated, error] = await awaitCatcher(ProductsModel.create(body))
    if (error) {
        return res.status(400).json({ status: "error", msg: error.message })
    }
    return res.status(201).json(productCreated)

}

export async function getProducts(req, res) {
    const [products, error] = await awaitCatcher(ProductsModel.find())
    if (error) {
        return res.status(400).json({ status: "error", msg: error.message })
    }
    return res.status(200).json(products)
}

export async function getProductById(req,res) {
    const id = req.params.id
    const [product, error] = await awaitCatcher(ProductsModel.findById(id))
    if (!product || error) {
        return res.status(404).json({ status: "error", msg: "producto no encontrado" })
    }
    return res.status(200).json(product)
}
