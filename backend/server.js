import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
// import productModel from './models/productModel.js';
import productRouter from './routes/productRoute.js';


const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// Middleware config
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
    
// Api Endpoints
app.get('/',async (req,res)=>{
try{
    res.send("Api is working ")
}
catch(err){
    console.log(err)
}
})

//Running server
app.listen(port,()=>{
    console.log('Server is running in Port ',port)
})
