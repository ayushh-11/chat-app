import React from 'react'
import GetConvo from '../hooks/GetConvo.jsx';
import { useMessageContext } from '../context/MessageContext';

function Message({chatSelected}) {
    const {selectedChat} = useMessageContext();
    const messages = GetConvo()
    
    return (
    
        <div className="px-4 flex-1 overflow-auto" >
        {messages &&  messages.map((message) => (
            <div key={message._id} className={`chat ${message.receiverId == selectedChat._id ? "chat-end" : "chat-start"}`}>
                <div className="chat-bubble chat-bubble-primary">
                    {message.message}
                </div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:4</div>
            </div>
        ))}
        </div>
    )
}

export default Message