const joi=require('joi')
//signup joischema
const joiUserSchema=joi.object({
    username:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().required(),
    cpassword:joi.string().required(),
    address:joi.string().required(),
    phonenumber:joi.number().required(),
    admin:joi.boolean().optional(),
    block:joi.boolean().optional()
})

//login schema
const joiLoginSchema=joi.object({
    username:joi.string(),
    password:joi.string()

})
module.exports={joiUserSchema,joiLoginSchema}