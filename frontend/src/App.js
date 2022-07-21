import './App.css';
import io from 'socket.io-client'
import { useState } from 'react'

const socket = io.connect("http://localhost:3002")

function App() {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const UnirseSala = () => {
    if(username !=="" && room !==""){
      socket.emit("join_room", room)
    }
  }

  return (
    <div className="App">
      <h1>Bienvenido a la Sala de Chat</h1>
      <input 
        type="text" 
        placeholder="Jhon..." 
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input 
        type="text" 
        placeholder="Sala ID..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={UnirseSala}>Unirse a la Sala</button>
    </div>
  );
}

export default App;
