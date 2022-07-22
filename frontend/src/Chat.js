import React, {useState} from 'react'

export default function Chat(socket, username, room) {

  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = async () =>{
    if(currentMessage !== ""){
      const messaageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };
      
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
        <button>&#9658;</button>
      </div>
    </div>
  )
}
