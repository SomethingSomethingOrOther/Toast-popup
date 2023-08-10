import './App.css';
import {useState} from "react"


const Toast=({message,messageType})=>{
    let toastStyle={
      backgroundColor:"inherit",
      padding:"10px",
      borderRadius:"5px"
    }
  
    if (messageType === "Success") {
    toastStyle.backgroundColor = "green";
    toastStyle.color = "white";
  } else if (messageType === "Error") {
    toastStyle.backgroundColor = "red";
    toastStyle.color = "white";
  } else if (messageType === "Warning") {
    toastStyle.backgroundColor = "yellow";
    toastStyle.color = "black";
  } else if (messageType === "Info") {
    toastStyle.backgroundColor = "blue";
    toastStyle.color = "white";
  }


  return (
    <div style={toastStyle}>
        {message}
    </div>
  )
}




function App() {
  const [showToast,setShowToast] =useState(false)
  const [leftOrRight,setLeftOrRight] = useState("left")
  const [topOrBottom,setTopOrBottom] = useState("top")
  const [messageType,setMessageType] =useState("success")
  const [inputMessage, setInputMessage] =useState("")
  const [toastDuration,setToastDuration] = useState(3000)

  

  const handleShow=()=>{
    setShowToast(true)
    setTimeout(()=>{
      setShowToast(false)
    },toastDuration)
   }


  return (
    <div className="App">
      <header>
        <h1>
          Toast Popup
        </h1>
      </header>
     <div>
      <select value={leftOrRight} onChange={(e)=>setLeftOrRight(e.target.value)}>
        <option value="left">left</option>
        <option value="right">right</option>
      </select>
     </div>
     <div>
      <select value={topOrBottom} onChange={(e)=>setTopOrBottom(e.target.value)}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
     </div>
     <div>
      <select value={messageType} onChange={(e)=>setMessageType(e.target.value)}>
        <option value="Success">Success</option>
        <option value="Error">Error</option>
        <option value="Warning">Warning</option>
        <option value="Info"> Info</option>
      </select>
     </div>
     <div>
      <input type="text" placeholder="write message" value={inputMessage} onChange={(e)=>setInputMessage(e.target.value)}/>
     </div>
     <div>
      <input type="range" min="3000" max="10000" value={toastDuration} onChange={(e)=>setToastDuration(e.target.value)}/>
     </div>
     <div>
      <button onClick={handleShow}>
        Show Toast!
      </button>
     </div>
    <div>
      {showToast && (
          <div style={{
            border: "1px solid black",
            position: "fixed",
            top: topOrBottom === "top" ? "2px" : "auto",
            bottom: topOrBottom === "bottom" ? "2px" : "auto",
            left: leftOrRight === "left" ? "2px" : "auto",
            right: leftOrRight === "right" ? "2px" : "auto",
          }}>
            <Toast message={inputMessage} messageType={messageType}/>
          </div>
        )}
    </div>
    </div>
  );
}

export default App;
