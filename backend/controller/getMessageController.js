const conversationModel = require("../model/conversationModel");
const messageModel = require("../model/messageModel");

const getMessageController = async (req, res) => {
    const { rid: receiverId } = req.params;
    const senderId = req.session.sid;
    let conversation = await conversationModel.findOne({
        participants : {$all : [senderId, receiverId]}
    }).populate("messages") ///extract create object of messages (message id stored)

    res.send(conversation.messages)


}
module.exports = getMessageController;