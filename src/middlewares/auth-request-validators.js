const validateUserAuth = (req,res,next)=>{
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Email or password missing in the request'
        })
    }
    next();

}

const validateAdminRequest = (req,res,next)=>{
   console.log(req.body)
    if(!req.body.id){
        return res.status(400).json({
            success: false,
            data: {},
            err: 'User id not given',
            message: 'Something went wrong'
        })
    }
    next();
}
//console.log(validateUserAuth)
module.exports ={
 validateUserAuth,
 validateAdminRequest   
}