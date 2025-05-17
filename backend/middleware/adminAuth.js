import jwt from 'jsonwebtoken'
const adminAuth =async (req,res,next) => {
 try{
     const {token} = req.headers
     if(!token){
        return res.json({success:false,message:"No admin token available"})
     }
     const token_decode = jwt.verify(token,process.env.JWT_SECRET)
     if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        return res.json({success:false,message:"Admin user and password isnot matching .."})
     }
     next()
 }

 catch(error){
         
        console.log(error)
        res.json({ success: false, message: error.message })
 }

}

export default adminAuth