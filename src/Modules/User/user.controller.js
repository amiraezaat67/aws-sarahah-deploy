

import  { Router} from 'express'
import * as UserServices from './Services/profile.service.js'  
import { authenticationMiddleware, authorizationMiddleware  } from '../../Middleware/index.js'
import { ADMIN_USER, systemRoles } from '../../constants/constants.js'
// import  asyncHandler  from 'express-async-handler'

const userController = Router()
const { USER} = systemRoles

userController.use(authenticationMiddleware() )

userController.get('/profile' ,authorizationMiddleware([USER]) , (UserServices.profileService)) 
userController.patch('/update-password' , (UserServices.updatePasswordService))
userController.put('/update-profile' , (UserServices.updateProfileService))
userController.get('/list' ,authorizationMiddleware(ADMIN_USER) ,(UserServices.listUsersService))



export  {userController}

