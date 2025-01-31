import { Message, User } from "../../../DB/models/index.js"



export const sendMessageService = async(req, res) => {
    const {content, receiverId} = req.body

    const user=await User.findById(receiverId)
    if(!user){
        return res.status(404).json({ message: 'User not found' })
    }

    const message = await Message.create({
        content,
        receiverId
    })

    res.status(200).json({ message: 'Success', data:message })
}



// export const listMessagesService = async(req, res) => {
//     const messages = await Message.find({}).populate(
//         [
//             {
//                 path:'receiverId',
//                 select:'username'
//             },
//         ]
//     )
//     res.status(200).json({ message: 'Success', data:messages })
// }


export const listMessagesService = async(req, res) => {
    const messages = await Message.find({receiverId:req.loggedInUser._id})
    res.status(200).json({ message: 'Success', data:messages })
}


