

export const errorHandler = (API)=>{
    return ( req, res, next) => {
        API(req,res,next).catch((err)=>{
            console.log('Error handler catch' , err);
            // res.status(err['cause']||500).json({
            //     message: 'Something went wrong',
            //     err_message: err.message
            // })
            next(new Error(err.message, {cause:err['cause']}))
            
        })
    }
}



export const globalErrorHandler =   (err, req, res, next) => {
    if(err){
        res.status(err['cause']||500).json({
            message: 'Something went wrong',
            err_message: err.message
        })

    }
}