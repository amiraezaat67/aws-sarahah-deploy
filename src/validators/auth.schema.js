import Joi from "joi";

const ageRule = (value, helper)=>{

    if(value < 18 ){
        return helper.message('Age must be at least 18')
        // return helper.error('any.invalid')
    }

    return value
}


export const SignUpSchema = {
    body:Joi.object({
        username:Joi.string().alphanum().min(4).messages({
            'string.base':'Username must be a string',  
            'string.alphanum':'Username must be alphanumeric',
            'string.min':'Username must be at least 4 characters long'
        }),
        email:Joi.string().email({
            tlds:{
                allow:['com','org','net','io']
                // allow:false,
                // deny:['com','org','net','io']
            },
            maxDomainSegments:2,
            multiple:true,
            separator:'#'
        }), 
        password:Joi
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*])[A-Za-z\d@$!%*]{8,}$/)
        .messages({
            'string.pattern.base':"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character from @$!%*",
            "any.required":"Password is required",
            "string.base":"Password must be a string"
        }), 
        confirmPassword : Joi.string().valid(Joi.ref('password')), 
        gender:Joi.string().valid('female','male'),
        phone:Joi.string(),
        age:Joi.number().integer().min(18).max(100).custom(ageRule),
        // couponType: Joi.string(),
        // couponAmount: Joi
        //     .number()
        //     .when('couponType', { 
        //            is: Joi.string().valid('percentage'), 
        //            then: Joi.number().less(100) , 
        //            otherwise: Joi.number().positive()
        //    })
    })
        // .with('email' , 'password')
        // .with('password' , 'confirmPassword')
    // .options({presence: 'required', allowUnknown: true})
}
