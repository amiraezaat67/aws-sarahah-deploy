
import { globalErrorHandler } from '../Middleware/errr-handler.middleware.js'
import * as controllers from  '../Modules/index.js'

const controllerHandler = (app) =>{
     console.log('controllers');
     
    app.use('/auth', controllers.authRouter)
    app.use('/messages', controllers.messageController )
    app.use('/user', controllers.userController)
    
    app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to the Sarahah APP' }))
    
    app.all('*', 
        (req, res) => res.status(404).json(
            { message: 'Route not found please make sure from your url and your method' }
        )
    )

    // global error handler
    app.use(globalErrorHandler )

}

export default controllerHandler