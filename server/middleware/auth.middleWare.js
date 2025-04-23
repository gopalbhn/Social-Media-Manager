
const jwt = require('jsonwebtoken')
const authenticateJwt = (req,res,next) =>{
    const authHeaders = req.header.authorization;
    const authCookies = req.cookies;
    if(authHeaders){
        console.log('from authHeaders')
        const token = authHeaders.split(' ')[1]
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                throw res.status(400)
            }
            if(user){
                req.user = user;
                next()
            }
        })
    }else if(authCookies){
            console.log('from auth cookies')
        const token = authCookies.token;
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                throw res.status(400)
            }
            if(user){
                req.user = user;
                next();
            }
        })
    }
    else{
        res.status(200).json({
            message:'Auth Header not found'
        })
    }
    

}

const generateJWT = (user) =>{
    const paylod = user.email;
    console.log("paylod",paylod);
    const token = jwt.sign(paylod,process.env.JWT_SECRET);
    
    return token
}

module.exports =  {authenticateJwt,generateJWT}