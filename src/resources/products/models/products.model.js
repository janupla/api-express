import crypto from 'crypto'
import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    description: {
        type: String,
        required: true,
        maxLength: 250
    },
    price: {
        type: "number",
        maxLength: 10,
        required : true
    },
    imageURL: {
        type: String,
        required: true,
        maxLength : 100

    },
    salt: String

}, { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } })

productSchema.methods.hashPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex")
    this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

productSchema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
    return this.password === hash
}

productSchema.pre('save', function (next) {
    console.log("Producto a agregar")
    console.log(this.toJSON());
    next()
})

productSchema.post('save', function (document) {
    console.log("Producto Agregado")
    console.log(document);
})

/*productSchema.virtual('title').get(function () {
    return `${this.name} ${this.surname}`
})*/

export const ProductsModel = new mongoose.model('Products', productSchema) 