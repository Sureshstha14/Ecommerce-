import express from 'express'
import {addProduct,deleteProduct,listProduct,singleProduct } from '../controller/productControllers.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';
const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct)
productRouter.post('/delete',adminAuth,deleteProduct)
productRouter.get('/list',listProduct)
productRouter.post('/single',adminAuth,singleProduct)

export default productRouter
