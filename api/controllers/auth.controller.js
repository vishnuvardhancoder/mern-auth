import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt  from "jsonwebtoken"

export const signup = async (req,res,next)=>{
    const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({ username, email, password: hashedPassword })
    try{
        await newUser.save()
        res.status(201).json({message:"User created successfully!"})
    }catch(error){
        next(error)
    }
}

export const signin = async(req, res, next) => {
  const { email, password } = req.body;
  try {
      const validUser = await User.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not Found! Sign Up first..'));
      
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Username and password did not match!'));
      
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set expiration
      const { password: hashedPassword, ...rest } = validUser._doc;
      
      res.cookie('access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Set secure flag in production
          sameSite: 'Strict', // Ensure it’s sent with cross-site requests
          expires: new Date(Date.now() + 3600000) // 1 hour
      }).status(200).json(rest);
  } catch (error) {
      next(error);
  }
};


export const google = async (req, res, next) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      const token = jwt.sign({ id: user ? user._id : newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set expiration
      
      if (user) {
          const { password: hashedPassword, ...rest } = user._doc;
          res.cookie('access_token', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // Set secure flag in production
              sameSite: 'Strict', // Ensure it’s sent with cross-site requests
              expires: new Date(Date.now() + 3600000) // 1 hour
          }).status(200).json(rest);
      } else {
          const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
          const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
          const newUser = new User({
              username: req.body.name.split(' ').join('').toLowerCase() + Math.floor(1000 + Math.random() * 9000),
              email: req.body.email,
              password: hashedPassword,
              profilePicture: req.body.photo,
          });
          await newUser.save();
          const { password: hashedPassword2, ...rest } = newUser._doc;
          res.cookie('access_token', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // Set secure flag in production
              sameSite: 'Strict', // Ensure it’s sent with cross-site requests
              expires: new Date(Date.now() + 3600000) // 1 hour
          }).status(200).json(rest);
      }
  } catch (error) {
      next(error);
  }
};


  export const signout = (req,res) =>{
    res.clearCookie('access_token').status(200).json("Signout Success")
  }