import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <div style={{backgroundColor:color,
            height:"50vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
      }}>
        <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}></input>
       <h2>Your Changed color is :{color}</h2>
       <p>Selected Color:{color}</p>
      </div>
    </>
  )
}

export default App
