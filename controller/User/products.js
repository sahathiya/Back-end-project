
// const Products=require('../model/productSchema')

// const AllProducts=async(req,res)=>{
   
//         const{name,category,image,price,offerprice,qty,description,brand,rating,reviews}=req.body
//         console.log(req.body);
        
//     const products=new Products({
//         name,category,image,price,offerprice,qty,description,brand,rating,reviews
//     })
//     await products.save()
//     res.status(200).send(products)
    
    

// }
const Products=require('../../model/productSchema')

const getAllProducts=async(req,res)=>{
    try {
        const products= await Products.find()
       
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({error:'error'})
    }
    
}

const getProductsId=async(req,res)=>{
    try {
        const productid=req.params.id
    const products= await Products.findById(productid)
    res.status(200).send(products)
    } catch (error) {
        res.status(404).send(error)
    }
    
}


const getProductsCategory=async(req,res)=>{
    try {
        
    const products=await Products.find({ category: req.params.category })
    res.status(200).json(products)
        
    } catch (error) {
        res.status(404).json({error:'error'})
    }
    
}
module.exports={getAllProducts,getProductsId,getProductsCategory}