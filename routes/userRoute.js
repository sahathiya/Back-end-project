const express=require('express')
const routes=express.Router()
const {getusers,createusers,userLogin} = require('../controller/User/users')

const {getAllProducts,getProductsId,getProductsCategory}=require('../controller/User/products')



//users signup/login/logout
routes
.get('/users',getusers)
.post('/signup',createusers)
.post('/login',userLogin)

//product view
.get('/products',getAllProducts)
.get('/productsby/:id',getProductsId)
.get('/products/:category', getProductsCategory)
module.exports=routes