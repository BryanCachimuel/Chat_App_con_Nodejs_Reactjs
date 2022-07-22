import './App.css';
import io from 'socket.io-client'
import { useState } from 'react'
import Chat from './Chat';

const socket = io.connect("http://localhost:3002")

function App() {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const UnirseSala = () => {
    if(username !=="" && room !==""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  return (
    <div className="App">
      {!showChat ? (
     <div className='joinChatContainer'>
     <h2>Sala de Chat</h2>
      <input 
        type="text" 
        placeholder="Usuario..." 
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input 
        type="text" 
        placeholder="ID Sala..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={UnirseSala}>Unirse a la Sala</button>
     </div>
       )
     : ( 
        <Chat socket={socket} username={username} room={room}/>
       )}
    </div>
  );
}

export default App;
