const Users=require('../../model/userSchema')
const {joiUserSchema,joiLoginSchema}=require('../../model/joivalidation')
const bcrypt=require('bcrypt')
const getusers=async (req,res)=>{
    try {
       const users= await Users.find()
       res.status(200).send(users)

    } catch (error) {
        res.status(404).send({message:error.message})
        
    }
    

}

//user Registration
const createusers= async (req,res)=>{
    try {
        const {value,error}=joiUserSchema.validate(req.body)
        const {username,email,password,cpassword,address,phonenumber}=value
        if(error){
          return  res.status(400).json({error:'error occured'})
        }
        if(password!==cpassword){
          return  res.status(404).json({error:'password do not match'})
        }


        const hashedPassword=await bcrypt.hash(password,8)
        const users=new Users({username,email,password:hashedPassword,cpassword:hashedPassword,address,phonenumber})
        await users.save()
        res.status(201).send(users)
    } catch (error) {
        res.status(404).send({meassage:error.message})
    }
   
}


//user login

const userLogin=async(req,res)=>{
    try {
        const{value,error}=joiLoginSchema.validate(req.body)
        if(error){
          return  res.status(400).send(error,'error')
        }
        const{username,password}=value

        //user login and JWT

        const user=await Users.findOne({username})
        if(!user){
           return  res.status(400).send(error,'user not found')
        }
        const matching=await bcrypt.compare(password,user.password)
        if(!matching){
            console.log(password);
            
           return res.status(400).send(error,'not match')
        }
        res.status(200).send('success')

    } catch (error) {
        res.status(400).json({error:'error ocuured'})
    }
}
module.exports={getusers,createusers,userLogin}