import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMessageContext } from '../context/MessageContext';

export default function GetConvo() {
  const [messages, setMessages] = useState([]);
    const{selectedChat,messageRefresh, setMessageRefresh} = useMessageContext()
  useEffect(() => {
    if (!selectedChat) return;
    axios.defaults.withCredentials = true;
    axios
      .get(`http://localhost:5000/api/message/${selectedChat._id}`)
      .then(response => {
        console.log('Messages =', response.data);
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, [selectedChat,messageRefresh]);

  return messages;
}
