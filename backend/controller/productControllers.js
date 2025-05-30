 import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js";
// Add Product 
const addProduct = async (req,res)=>{
  try{
const {name,description,price,category,subCategory,size,bestseller} = req.body;
const image1 = req.files.image1 &&  req.files.image1[0]
const image2 = req.files.image2 && req.files.image2[0]
const image3 = req.files.image3 && req.files.image3[0]
const image4 = req.files.image4 && req.files.image4[0]

const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

let imagesUrl = await Promise.all(
    images.map( async (item)=>{
        let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
        return result.secure_url
    })
)
console.log(name,description,price,category)
console.log(imagesUrl)
const productData ={
    name,
    description,
    price:Number(price),
    image:imagesUrl,
    category,
    subCategory,
    bestseller: bestseller ==='true'? true:false,
    date:Date.now()
}
console.log(productData)
const product = new productModel(productData)
await product.save()

res.json({success:true,message:'Product Added..'})

}
catch(error){
    console.log(error)
    res.json({success:false,Message:error.message})
    
}
}
// List Product 
const listProduct = async (req,res)=>{
    try{
        const products = await productModel.find({})
        res.json({success:true,products})
        
    }
    catch(error){
        console.log(error)
        res.json({success:false,Message:error.message})
    }
    
}
// Delete Product 
const deleteProduct =async (req,res)=>{
    try{
        await  productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'Product removed sucessfully...'})
        
        
    }
    catch(error){
        console.log(error)
        res.json({success:false,Message:error.message})
    }
    
}
//  Product 
const singleProduct = async (req,res)=>{
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId)
        res.json({success:true,product})
        console.log(product)
        
    }
    catch(error){
        console.log(error)
        res.json({success:false,Message:error.message})

    }
}

export {addProduct,deleteProduct,listProduct,singleProduct}