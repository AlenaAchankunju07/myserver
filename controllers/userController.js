const users = require('../models/userModels')
const jwt = require('jsonwebtoken')

//register

exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    const {fname,lname,email,password,phone}   = req.body
   console.log(fname,lname,email,password,phone);

   try{ 
    const existingUser = await users.findOne({email})
    if(existingUser){
      res.status(406).json("User Already exist...Please Login!!!")   
    }else{
      const newUser = new users({
        fname,lname,email,password,phone      })
      await newUser.save()
      res.status(200).json(newUser)
    }
  }
  catch(err){
      res.status(401).json(err)   
  } 
}

//login
exports.loginController =async (req,res)=>{
    console.log("inside loginController");
    const{email,password}=req.body
    console.log(email,password);
    
    try{
       const existingUser = await users.findOne({email,password})
       if(existingUser){
        //token generation
        res.status(200).json({
            user:existingUser,
            
        })

       }else{
       res.status(404).json("invalid email or password")
       }
    }catch(err){
        res.status(401).json(err)    }
    
}