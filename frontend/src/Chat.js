import React, {useState} from 'react'
import io from 'socket.io-client'

export default function Chat(username) {

  const socket = io.connect("http://localhost:3002")

  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () =>{
    if(currentMessage !== ""){
      const messageData = {
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
    }
  };

  return (
    <div>
      <div className="chat-header">
        <p>Chat en Línea</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input 
          type="text" 
          placeholder="Escribiendo..." 
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}
